const express = require('express');
const router = express.Router();
var Book = require("../models/book.model");
var Section = require("../models/section.model");
var Author = require("../models/author.model");
var Checkout = require("../models/checkout.model");

const crudController = require("./crud.controller");

router.post("/", crudController(Book).post);
router.get("/", crudController(Book).get);
router.get("/:id", crudController(Book).getOne);
router.patch("/:id", crudController(Book).patch);
router.delete("/:id", crudController(Book, "books").deleteOne);

router.get("/checkouts/:num", async function (req, res) {
    try {
        var num = req.params.num;
        if (num == 1) {
            const book = await Book.find({ checkoutId: { $exists: true } }).populate("checkoutId").lean().exec();
            return res.status(200).send(book);
        } else if (num == 0) {
            const book = await Book.find({ checkoutId: { $exists: false } }).lean().exec();
            return res.status(200).send(book);
        } else {
            return res.status(400).send("Not a valid Parameter");
        }

    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.get("/authors/:id", async function (req, res) {
    try {
        var id = req.params.id;
        const book = await Book.find({ authorsIds: id }).lean().exec();
        const author = await Author.findById(id).lean().exec();
        return res.status(200).json({ author: author, books: book });
    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.get("/sections/:id", async function (req, res) {
    try {
        var id = req.params.id;
        const book = await Book.find({ sectionId: id }).lean().exec();
        const section = await Section.findById(id).lean().exec();
        return res.status(200).json({ section: section, books: book });
    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.get("/sections/:id/:num", async function (req, res) {
    try {
        var num = req.params.num;
        var id = req.params.id;
        const section = await Section.findById(id).lean().exec();
        if (num == 1) {
            const book = await Book.find({ $and: [{ checkoutId: { $exists: true } }, { sectionId: id }] }).lean().exec();
            return res.status(200).json({ section: section, books: book });
        } else if (num == 0) {
            const book = await Book.find({ $and: [{ checkoutId: { $exists: false } }, { sectionId: id }] }).lean().exec();
            return res.status(200).json({ section: section, books: book });
        } else {
            return res.status(400).send("Not a valid Parameter");
        }

    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.get("/sections/:id1/authors/:id2", async function (req, res) {
    try {
        var id1 = req.params.id1;
        var id2 = req.params.id2;
        //console.log(id1, "----", id2);
        const section = await Section.findById(id1).lean().exec();
        const author = await Author.findById(id2).lean().exec();
        const book = await Book.find({ $and: [{ authorsIds: id2 }, { sectionId: id1 }] }).lean().exec();
        return res.status(200).json({ section: section, author: author, books: book });
    } catch (err) {
        return res.status(400).send(err.message);
    }
})

router.patch("/:id/:num", async function (req, res) {
    try {
        const id = req.params.id;
        const num = req.params.num;
        const book = await Book.findById(id).lean().exec();
        if (num == 1) {
            if (book.checkoutId == undefined) {
                const newBook = await Book.findByIdAndUpdate(id, req.body, { new: true }).populate("checkoutId").lean().exec();
                return res.send(newBook);
            }
            else {
                return res.send("Book Already Checked out");
            }

        } else if (num == 0) {
            if (book.checkoutId != undefined) {
                const newBook = await Book.findByIdAndUpdate(id, { $unset: { checkoutId: 1 } }, { new: true }).lean().exec();
                return res.send(newBook);
            } else return res.send(book);

        } else {
            return res.send("Not a valid parameter");
        }

    } catch (err) {
        return res.status(400).send(err.message);
    }

});

module.exports = router;
