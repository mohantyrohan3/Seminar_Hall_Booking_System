const express = require('express');
const router = express.Router();



router.get('/',(req,res)=>{
    res.send({
        "HELLO WORLD":"SERVER STARTED"
    })
})




module.exports = router;