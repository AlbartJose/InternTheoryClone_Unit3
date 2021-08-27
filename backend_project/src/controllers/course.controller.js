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
        return res.render("courses/courses.ejs", {
            courses: courses,
        })
    } catch (err) {
        return res.status(400).send(err.msg)
    }
})



module.exports = router;