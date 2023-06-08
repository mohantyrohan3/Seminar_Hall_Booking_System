const details = require('../routes/constants');
const mongoose = require('mongoose');
// mongodb+srv://mohantyrohan:<password>@cluster0.llzjwsh.mongodb.net/?retryWrites=true&w=majority
// mongodb://localhost:27017/seminar_hall_DB
mongoose.connect(`mongodb+srv://mohantyrohan:${details.MONGO_Password}@cluster0.llzjwsh.mongodb.net/seminar_hall_DB?retryWrites=true&w=majority`,{
    // family: 4 // Uses Ipv4
});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'Error Connecting to Db'));

db.once('open',function(){
    console.log('Successfully Connected To database');
});