const express = require('express');
const router = express.Router();
const Admin = require("../models/admin");
const { hashSync } = require('bcrypt');
const adminPassport = require('../config/passport');
const Department = require('../models/department');
const departmentPassport = require('../config/department_passport');
const nodemailer = require("nodemailer");
const details = require('./constants');
const Department_Requests = require('../models/department_requests');

router.get('/',(req,res)=>{
    res.send({
        "HELLO WORLD":"SERVER STARTED"
    })
})



router.post('/create_admin',(req,res)=>{
  const newUser = new Admin({ 
    email:req.body.email,
    password:hashSync(req.body.password, 10)
   });

  newUser.save()
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to create user' });
    });
})


// Admin Login Route
router.post('/admin_login', adminPassport.authenticate('admin', { failureRedirect: '/api/failed' }), (req,res)=>{
    res.send({
        msg:'Successfully Logged In',
        admin:req.user
    })
})



// Department Login Route
router.post('/department_login',departmentPassport.authenticate('department', { failureRedirect: '/api/failed' }),(req,res)=>{
  res.send({
    msg:'Successfully Logged In',
    department:req.user
})
})



// Get Details of Authenticated User Route
router.get('/details', async (req,res)=>{

  if(req.isAuthenticated()){
    res.send({
      status:"Authenticated",
      details:req.user
    })
    
  }

  
  else{
    res.send({
      status:"Not Authenticated",
      msg:'Not Authenticated'
    })
  }

})








// Create Department Route
router.post('/create_department',async(req,res)=>{


  if(req.isAuthenticated() && req.user.type === 'Admin'){
    const newUser = new Department({ email: req.body.email, password: hashSync(req.body.password, 10), department:req.body.department,head:req.body.head });
    try{
        const deletedDocument = await Department_Requests.findOneAndDelete({ email:req.body.email });
        await newUser.save()
        const testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
          host: "gmail",
          service:'gmail',
          auth: {
            user: details.EMAIL,
            pass: details.PASSWORD
          },
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: details.EMAIL,
          to: req.body.email,
          subject: "Acceptance of The Department",
          text: "Your Department has been added for the seminar hall booking system",
          html: `<h3>Your Department has been added for the seminar hall booking system</h3><br/><p>Your Password for Department Login is ${req.body.password}</p>`,
        });
        res.send({
          department:newUser,
          mail:info,
          deleted_request:deletedDocument
        })
    }
   catch(error) {
     res.send({
      error:error
     })
   }
  }

  else{
    res.send({
      msg:"You are not authorized to create department"
  })
  }


})








// Failed Route
router.get('/failed',(req,res)=>{
    res.send({
        'error':'Error in Logging In'
    })
    // res.redirect('/admin_login')
})




// Logging Out Route
router.get('/logout', function(req, res) {
    req.logout(function(err) {
      if (err) {
        console.log('Error occured while loging out');
        return;
      }
      res.send({
        msg:'LOGGED OUT'
      })
    });
  });






router.use('/hall',require('./hall'));
router.use('/department',require('./department'));
router.use('/booking',require('./booking'));





module.exports = router;