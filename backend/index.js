const express = require('express');
const port =  8000;

const app = express();




app.use('/',require('./routes/index'));







app.listen(port , (err)=>{
    if(err){
        console.log("Error while starting the server ",err);
        return;
    }
    console.log("Server is up and running on port : ",port);

})