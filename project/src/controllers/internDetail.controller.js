const express = require('express');

const InternDetail = require('../models/intern_detail.model');
const internship = require('../models/internship.model');

const router = express.Router();



router.get('/', async (req, res) => {
    try {
        const internDetail = await InternDetail.find().populate("internshipId").lean().exec();
        res.status(201).send(internDetail);

    }
    catch (err) {
        res.status(400).send(err.message)
    }

})

router.get('/:id', async (req, res) => {
    try {
        var id = req.params.id;
        console.log(id);
        const internDetail = await InternDetail.find({ internshipId: id }).populate("internshipId").lean().exec();
        res.status(201).send(internDetail);

    }
    catch (err) {
        res.status(400).send(err.message)
    }

})

router.post('/', async (req, res) => {
    try {
        const internDetail = await InternDetail.create(req.body);
        res.status(200).send(internDetail);

    }
    catch (err) {
        res.status(400).send(err.message)
    }

})

router.patch('/:id', async (req, res) => {
    try {
        const internDetail = await InternDetail.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
        res.status(200).send(internDetail);

    }
    catch (err) {
        res.status(400).send(err.message)
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const internDetail = await InternDetail.findByIdAndDelete(req.params.id).lean().exec();
        res.status(200).send(internDetail);

    }
    catch (err) {
        res.status(400).send(err.message)
    }

})



module.exports = router;