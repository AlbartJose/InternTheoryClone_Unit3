const express = require("express")

const router = express.Router()

const Course = require("../models/course.model")

// const crudController = require("./crud.controller")
// router.post("", crudController(Course).post);
// router.get("", crudController(Course).get);

router.get("/", async (req,res) => {
    const courses = await Course.find().lean().exec()
    const pageTitle = "InternTheory"
    return  res.render("courses/courses.ejs",{
        courses: courses,
        pageTitle,
    })
    // return res.send(courses)
})
router.post("/", async (req,res) => {
    const course = await Course.create(req.body)
    return res.send(course)
})


module.exports = router;