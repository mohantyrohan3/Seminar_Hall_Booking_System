const express = require('express');
const router = express.Router();
const Booking_Requests = require('../models/booking_requests');

router.get('/',(req,res)=>{
    res.send({
        msg:'Inside Booking Route'
    })
})




// Create Booking Request by Department
router.post('/create_booking',(req,res)=>{
    if(req.isAuthenticated() && req.user.type === 'Department'){

        const newUser = new Booking_Requests({
            hall:req.body.hall,
            department:req.user.id,
            event:req.body.event
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
            msg:'Not Authorized to Make booking requests'
        })
    }



})












module.exports = router;