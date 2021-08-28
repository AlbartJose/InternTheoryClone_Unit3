const express = require("express")

const router = express.Router()

const KnowMore = require("../models/knowMore.model")
const Course = require("../models/course.model")

const crudController = require("./crud.controller")
router.post("/", crudController(KnowMore).post);
router.get("/", crudController(KnowMore).get);
router.get("/", crudController(KnowMore).getOne)
router.patch("/", crudController(KnowMore).patch)
router.delete("/", crudController(KnowMore).deleteOne)

router.get("/index", async (req, res) => {
    res.render("courses/index.ejs")
})

router.get("/:idCourse", async (req, res) => {
    const knowMore = await KnowMore.findOne({ courseId: { $eq: req.params.idCourse } }).populate('courseId').exec()
    var img = knowMore.courseId.img_src
    var xprice = knowMore.courseId.xprice
    var price = knowMore.courseId.price
    const courses = await Course.find().lean().exec()
    var scourses = []
    knowMore.similar_courses.forEach((courseName) => {
        courses.forEach((el) => {
            if (courseName == el.name) {
                scourses.push(el)
            }
        })
    })
    return res.render("knowMore.ejs", {
        knowMores: knowMore,
        price,
        xprice,
        img,
        scourses
    })
})



module.exports = router;