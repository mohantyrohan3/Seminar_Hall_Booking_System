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




// Show all the booking requests
router.get('/show_booking_requests',async (req,res)=>{
    
    if(req.isAuthenticated() && req.user.type === 'Admin'){
        try{
            const requests = await Booking_Requests.
            find().
            populate('department').
            exec();
            res.send({
                booking_requests:requests
            })
        }
        catch(err){
            res.send({
                error:err
            })
        }
    }
    else{
        res.send({
            msg:'You are not authorized'
        })
    }

})















module.exports = router;