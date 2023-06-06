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






module.exports = router;