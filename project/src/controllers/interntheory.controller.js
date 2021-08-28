const express = require('express');
const router = express.Router();
const Course = require("../models/course.model");
const KnowMore = require("../models/knowMore.model");

router.get("/index", async function (req, res) {
    try {
        return res.render("index");

    } catch (err) {
        return res.status(400).send(err.message);
    }
});
router.get("/home", async function (req, res) {
    try {
        return res.render("mainPage");

    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/contact", async function (req, res) {
    try {
        return res.render("contact");

    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/jobs", async function (req, res) {
    try {
        return res.render("jobs");

    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/login", async function (req, res) {
    try {
        return res.render("login_page");

    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/register/student", async function (req, res) {
    try {
        return res.render("studentRegister_page");

    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/register/company", async function (req, res) {
    try {
        return res.render("company_register");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/dashboard", async function (req, res) {
    try {
        return res.render("dashboard");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/users/detail", async function (req, res) {
    try {
        return res.render("intern_final");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/internships", async function (req, res) {
    try {
        return res.render("internship");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/internships/interndetail", async function (req, res) {
    try {
        return res.render("Allwave AV");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/internships/interndetail/fillinfo", async function (req, res) {
    try {
        return res.render("submit1");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

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

router.get("/courses/cart", async function (req, res) {
    try {
        return res.render("cart_page");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/courses/:idCourse", async (req, res) => {
    const knowMore = await KnowMore.findOne({ courseId: { $eq: req.params.idCourse } }).populate('courseId').exec();
    console.log(knowMore);
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



router.get("/courses/cart/payment/success", async function (req, res) {
    try {
        return res.render("success");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});

router.get("/dummy", async function (req, res) {
    try {
        return res.render("dummy");
    } catch (err) {
        return res.status(400).send(err.message);
    }
});


module.exports = router;