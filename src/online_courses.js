const path = require("path");

const express = require("express")
const app = express()

const connect = require("./configs/db")

const courseController = require("./controllers/course.controller")
const cartItemController = require("./controllers/cart.controller")
const knowMoreController = require("./controllers/knowMore.controller")

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views/"));
app.set("view engine", "ejs");

app.use("/courses", courseController)
app.use("/cartItems", cartItemController)
app.use("/knowMores", knowMoreController)

app.listen(2222, async () => {
    await connect();
    console.log("Listening to port 2222")
})