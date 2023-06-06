const express = require('express');
const router = express.Router();
const Department = require('../models/department');
const Department_Requests = require('../models/department_requests');

router.get('/', (req,res)=>{
    res.send({
        msg:'Inside Department Router'
    })
})





// Show the Departments 
router.get('/show_departments',(req,res)=>{
    Department.find({},{ _id: 0 , password:0 })
    .then((departments) => {
      res.send({
          departments:departments
      })
    })
    .catch((error) => {
      res.send({
          err:err
      })
    });
})





// Department Requests
router.post('/request_department' , (req,res)=>{

    const newUser = new Department_Requests({ 
        email:req.body.email,
        department:req.body.department,
        head:req.body.head
     });

    newUser.save()
        .then((user) => {
        res.status(201).json(user);
        })
        .catch((error) => {
        res.status(500).json({ error: 'Failed to create user' });
        });
})






// Show the department requests
router.get('/show_department_requests',(req,res)=>{
    if(req.isAuthenticated() && req.user.type === 'Admin'){
        Department_Requests.find({},{ _id: 0})
    .then((requests) => {
      res.send({
          requests:requests
      })
    })
    .catch((error) => {
      res.send({
          err:err
      })
    });
    }
    else{
        res.send({
            msg:'You are not authorized to view the requests'
        })
    }
})



















module.exports = router