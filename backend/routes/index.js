const express = require('express');
const router = express.Router();
const Admin = require("../models/admin");
const { hashSync } = require('bcrypt');
const passport = require('passport');
const adminPassport = require('../config/passport');
const Department = require('../models/department');
const departmentPassport = require('../config/department_passport');

router.get('/',(req,res)=>{
    res.send({
        "HELLO WORLD":"SERVER STARTED"
    })
})



router.post('/admin_login', adminPassport.authenticate('admin', { failureRedirect: '/failed' }), (req,res)=>{
    res.send({
        msg:'Successfully Logged In',
        admin:req.user
    })
})



router.post('/department_login',departmentPassport.authenticate('department', { failureRedirect: '/failed' }),(req,res)=>{
  res.send({
    msg:'Successfully Logged In',
    department:req.user
})
})




router.get('/details', async (req,res)=>{

  if(req.isAuthenticated()){
    try{
      const admin = await Admin.findOne({
        email: req.user.email
      })

      if (!admin) { 
        res.send({
          details:req.user,
          type:'Department'
        })
       }
       else{
        res.send({
          details:req.user,
          type:"Admin"
        })
       }
    }

    catch(err){
       res.send({
        error:err
       })
    }
  }

  
  else{
    res.send({
      msg:'Not Authenticated'
    })
  }

})







router.post('/create_department',(req,res)=>{

   const newUser = new Department({ email: req.body.email, password: hashSync(req.body.password, 10), department:req.body.department,head:req.body.head });

  newUser.save()
  .then((user) => {
    res.status(201).json(user);
  })
  .catch((error) => {
    res.status(500).json({ error: 'Failed to create user' });
  });

})









router.get('/failed',(req,res)=>{
    res.send({
        'msg':'Error in Logging IN'
    })
})


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









module.exports = router;