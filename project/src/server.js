const express = require('express');
const path = require("path");
//Connect dB
const connect = require('./configs/db');

//CRUD
const userController = require("./controllers/user.controller");
const internshipController = require("./controllers/internship.controller");
const internDetailController = require("./controllers/internDetail.controller");
const educationalDetailController = require("./controllers/educational.controller");
const courseController = require("./controllers/course.controller");
const internController = require("./controllers/interntheory.controller");
const knowMoreController = require("./controllers/knowMore.controller")

const app = express();
app.use(express.json());

app.set('views', path.join(__dirname, 'views/'));
app.use("/static", express.static(path.join(__dirname + '/public')));
app.set("view engine", "ejs");


var cors = require('cors');
app.use(cors({ origin: '*' }));

app.use("/users", userController);
app.use("/internship", internshipController);
app.use("/internDetail", internDetailController);
app.use("/educationalDetail", educationalDetailController);
app.use("/courses", courseController)
app.use("/interntheory", internController);
app.use("/knowMores", knowMoreController)

app.get("/", async function (req, res) {
    try {
        return res.render("index");

    } catch (err) {
        return res.status(400).send(err.message);
    }
});
//Start the server
const start = async () => {
    await connect();
    app.listen(2222, () => {
        console.log("Listening on port 2222");
    });
};
start();