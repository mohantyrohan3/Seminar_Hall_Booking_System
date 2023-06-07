const express = require('express');
const router = express.Router();
const Hall = require('../models/hall')


router.get('/',(req,res)=>{
    res.send({
        msg:'Inside Hall Router'
    })
})






// Create Hall Admin Restricted
router.post('/create_hall',(req,res)=>{
    if(req.isAuthenticated() && req.user.type === 'Admin'){
        const newUser = new Hall({
            name:req.body.name,
            status:'Not Filled',
            capacity:req.body.capacity,
            department:'',
            event:''
        });

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
            msg:"You are not authorized to create hall"
        })
    }
})




// Getting all the Halls
router.get('/view_halls', (req,res)=>{
    Hall.find({},{ _id: 0 })
  .then((halls) => {
    res.send({
        halls:halls
    })
  })
  .catch((error) => {
    res.send({
        err:err
    })
  });

})











module.exports = router;