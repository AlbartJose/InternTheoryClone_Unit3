const express = require('express');
const path = require('path');

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended:false}));

const connect = require("./configs/db");

const internshipController = require("./controllers/internship.controller");
const internDetailController = require("./controllers/internDetail.controller");

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

app.use("/internship", internshipController);
app.use("/internDetail", internDetailController);

app.listen(5067, async () => {
    await connect();
    console.log("listening on port 5429");
})

