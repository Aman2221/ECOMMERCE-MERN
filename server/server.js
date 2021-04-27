const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(require('./routers.js'))
app.use(require('./Schema.js'))

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept")
//   res.header("Access-Control-Allow-Origin", req.header('Origin'));
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

const port = process.env.PORT || 5000 ;
const CONN_URL = `mongodb+srv://admin:as562770@cluster0.qh1se.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database Connected');
})

app.listen(port , () => {
    console.log(`Listening on ${port}`);
})