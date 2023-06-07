const express = require('express');
const router = express.Router();
const Booking_Requests = require('../models/booking_requests');
const Hall = require('../models/hall');

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






router.post('/change_booking_request',async (req,res)=>{
    if(req.isAuthenticated() && req.user.type === 'Admin'){
        // id of booking request and decision and department and hall name and event
        if(req.body.decision === 'Yes'){
            try{
                const requests = await Booking_Requests.findByIdAndDelete(req.body.id);
                const updatedDocument = await Hall.findOneAndUpdate(
                    { name: req.body.name },
                    {department:req.body.department,event:req.body.event,status:"Filled"},
                    { new: true }
                  );
                  res.send({
                    status:'Booking Accepted',
                    updates:updatedDocument
                  })
            }
            catch(err){
                res.send({
                    error:err
                })
            }
        }
        else{
            try{
                const requests = await Booking_Requests.findByIdAndDelete(req.body.id);
                res.send({
                    status:'Not Accepted'
                })
            }
            catch(err){
                res.send({
                    error:err
                })
            }
        }
    }
    else{
        res.send({
            msg:'You are not authorized'
        })
    }
})




























module.exports = router;