const mongoose = require('mongoose');




const hallSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        // Filled or Not Fiiled
        type:String,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    department:{
        type:String
    },
    event:{
        type:String
    }
});


const Hall = mongoose.model('Hall',hallSchema);

module.exports=Hall;