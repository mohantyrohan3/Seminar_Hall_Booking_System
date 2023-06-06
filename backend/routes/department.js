const express = require('express');
const router = express.Router();
const Department = require('../models/department');


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












module.exports = router