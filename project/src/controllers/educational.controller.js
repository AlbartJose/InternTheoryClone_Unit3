const express = require('express');
const router = express.Router();
const EducationalDetails = require('../models/educational.model');



router.get('/', async (req, res) => {
    try {
        const educationalDetails = await EducationalDetails.find().lean().exec();
        res.status(400).send(educationalDetails);

    }
    catch (err) {
        res.status(400).send(err.message)
    }

})

router.post('/', async (req, res) => {
    try {
        const educationalDetails = await EducationalDetails.create(req.body);
        res.status(200).send(educationalDetails);

    }
    catch (err) {
        res.status(400).send(err.message)
        console.log(err)
    }

})

router.patch('/:id', async (req, res) => {
    try {
        const educationalDetails = await EducationalDetails.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
        res.status(200).send(educationalDetails);

    }
    catch (err) {
        res.status(400).send(err.message)
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const educationalDetails = await EducationalDetails.findByIdAndDelete(req.params.id).lean().exec();
        res.status(200).send(educationalDetails);

    }
    catch (err) {
        res.status(400).send(err.message)
    }

})

module.exports = router;