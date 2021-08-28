const express = require("express");

const router = express.Router();

const CartItem = require("../models/cart.model");
const Course = require("../models/course.model");

const crudController = require("./crud.controller")
router.post("", crudController(CartItem).post);
router.get("", crudController(CartItem).get);
router.get("", crudController(CartItem).getOne)
router.patch("", crudController(CartItem).updateOne)
router.delete("", crudController(CartItem).deleteOne)

router.get("/cartItems", async (req, res) => {
  try {
    const cartItems = await CartItem.find().lean().exec();
    return res.render("courses/cart.ejs",{
      cartItems:cartItems
    })
    } catch (err) {
      return res.status(400).send(err.msg);
    }
});


// router.post("/", async (req, res) => {
//   try {
//     const cartItem = await CartItem.create(req.body);
//     return res.status(201).json({ cartItem: cartItem });
//   } catch (err) {
//     return res.status(400).send(err.msg);
//   }
// });
// router.patch("/:id", async (req, res) => {
//   try {
//     const cartItem = await CartItem.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     return res.status(201).json({ cartItem: cartItem });
//   } catch (err) {
//     return res.status(400).send(err.msg);
//   }
// });
// router.delete("/:id", async (req, res) => {
//   try {
//     const cartItem = await CartItem.findByIdAndDelete(req.params.id);
//     return res.status(201).json({ cartItem: cartItem });
//   } catch (err) {
//     return res.status(400).send(err.msg);
//   }
// });

module.exports = router;
