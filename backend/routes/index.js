const express = require('express');
const router = express.Router();
const Admin = require("../models/admin");
const { hashSync } = require('bcrypt');
const adminPassport = require('../config/passport');
const Department = require('../models/department');
const departmentPassport = require('../config/department_passport');

router.get('/',(req,res)=>{
    res.send({
        "HELLO WORLD":"SERVER STARTED"
    })
})


// Admin Login Route
router.post('/admin_login', adminPassport.authenticate('admin', { failureRedirect: '/failed' }), (req,res)=>{
    res.send({
        msg:'Successfully Logged In',
        admin:req.user
    })
})



// Department Login Route
router.post('/department_login',departmentPassport.authenticate('department', { failureRedirect: '/failed' }),(req,res)=>{
  res.send({
    msg:'Successfully Logged In',
    department:req.user
})
})



// Get Details of Authenticated User Route
router.get('/details', async (req,res)=>{

  if(req.isAuthenticated()){
    res.send({
      details:req.user
    })
    
  }

  
  else{
    res.send({
      msg:'Not Authenticated'
    })
  }

})








// Create Department Route
router.post('/create_department',(req,res)=>{


  if(req.isAuthenticated() && req.user.type === 'Admin'){
    const newUser = new Department({ email: req.body.email, password: hashSync(req.body.password, 10), department:req.body.department,head:req.body.head });
  
   newUser.save()
   .then((user) => {
     res.status(201).json(user);
   })
   .catch((error) => {
     res.status(500).json({ error: 'Failed to create user' });
   });
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
        'msg':'Error in Logging In'
    })
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





module.exports = router;