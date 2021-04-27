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

// const userProductSchema = new mongoose.Schema({
// imgSrc:{
//     type : String,
//     require : true
// },
// price : {
//     type : String,
//     require : true
// },
// name : {
//     type : String,
//     require : true
// },
// description : {
//     type : String,
//     require : true
// },
// email : {
//         type : String,
//         require : true
//     },
// password : {
//     type : String,
//     require : true
// }
// })

const userModel = mongoose.model('data', userSchema);
// const userProductModel = mongoose.model('products', userProductSchema);
module.exports = userModel;
// module.exports = userProductModel;