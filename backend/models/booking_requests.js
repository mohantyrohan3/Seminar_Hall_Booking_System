const mongoose = require('mongoose');




const bookingrequestSchema = new mongoose.Schema({
    hall:{
        type:String,
        required:true
    },
    department:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required:true
    },
    event:{
        type:String,
        required:true
    }
});


const Booking_Requests = mongoose.model('Booking_Requests',bookingrequestSchema);

module.exports=Booking_Requests;