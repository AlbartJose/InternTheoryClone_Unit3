const express = require('express');

//Connect dB
const connect = require('./configs/db');

//CRUD
const userController = require("./controllers/user.controller");

const app = express();
app.use(express.json());

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

var cors = require('cors');
app.use(cors({ origin: '*' }));

app.use("/users", userController);

//Start the server
const start = async () => {
    await connect();
    app.listen(2222, () => {
        console.log("Listening on port 2222");
    });
};
start();