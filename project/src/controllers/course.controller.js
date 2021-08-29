const express = require("express")

const router = express.Router()

const Course = require("../models/course.model")

const crudController = require("./crud.controller")
router.post("/", crudController(Course).post);
router.get("/", crudController(Course).get);
router.get("/:id", crudController(Course).getOne)
router.patch("/:id", crudController(Course).patch)
router.delete("/:id", crudController(Course).deleteOne)




router.get("/courses", async (req, res) => {
    try {
        const courses = await Course.find().lean().exec()
        return res.render("courses.ejs", {
            courses: courses,
        })
    } catch (err) {
        return res.status(400).send(err.msg)
    }
})

// for add to cart local storage
// router.get("/:id", async(req,res) => {
//     try{
//         const courses = await Course.find().lean().exec()
//         const course = await Course.find({_id:{$eq:req.params.id}}).lean().exec()
//         let cart = {
//             name: course.name,
//             xprice: course.xprice,
//             price: course.price
//         }
//         let arr;
//         arr = localStorage.getItem("cart");

//         if (arr == null) {
//             arr = [];   
//         } else {
//             arr = JSON.parse(localStorage.getItem("cart"));
//         }
//         const nam = cart.name;
//         const found = arr.some(el => el.name === nam);
//       if (found) {
//           return;
//       }
//       arr.push(cart);
//       localStorage.setItem("cart", JSON.stringify(arr));
//       return res.render("courses/courses.ejs",{
//                 courses:courses
//       })
//     } 
//     catch(err){
//       return res.status(404).send(err.msg)
//     }
//   })


module.exports = router;