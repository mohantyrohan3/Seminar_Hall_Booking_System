const mongoose = require('mongoose');




const departmentSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:String
    },
    head:{
        type:String,
        required:String
    }
});


const Department = mongoose.model('Department',departmentSchema);

module.exports=Department;