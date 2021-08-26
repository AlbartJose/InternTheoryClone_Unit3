


const express = require('express');
const router = express.Router();
var User = require("../models/user.model");

const crudController = require("./crud.controller");

router.post("/login", async function (req, res) {
    try {
        var user = await User.find({ $and: [{ email: req.body.username }, { password: req.body.password }] }).lean().exec();
        console.log(user);
        if (user.length == 0) {
            return res.status(201).json({ valid: false });
        } else if (user.length == 1) {
            console.log(user[0]._id);
            const restUser = await User.updateMany({ _id: { $ne: user[0]._id } }, { $set: { signedIn: false } }).lean().exec();
            const newUser = await User.findByIdAndUpdate(user[0]._id, { $set: { signedIn: true } }, { new: true }).lean().exec();
            return res.status(201).json({ user: newUser, valid: true });
        }

    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.patch("/logout", async function (req, res) {
    try {
        console.log("Why");
        var user = await User.find({ signedIn: true }).lean().exec();
        console.log(user.length);
        if (user.length == 0) {
            return res.status(201).json({ status: "All signed out Already" });
        } else if (user.length == 1) {
            var id = user[0]._id;
            console.log(id);
            const item = await User.findByIdAndUpdate(id, { signedIn: false }, { new: true }).lean().exec();
            console.log(item);
            return res.status(201).send(item);
        }
    } catch (err) {
        return res.status(400).json({ status: "User signed out" });
    }
});


router.post("/", crudController(User).post);
router.get("/", crudController(User).get);
router.get("/:id", crudController(User).getOne);
router.patch("/:id", crudController(User).patch);
router.delete("/:id", crudController(User, "Users").deleteOne);

module.exports = router;