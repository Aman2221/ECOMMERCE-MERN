const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const userModel = mongoose.model('data', userSchema);

module.exports = userModel;