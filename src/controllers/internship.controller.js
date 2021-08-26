const express = require('express');
const router = express.Router();
const Internship = require('../models/internship.model');



router.get('/', async (req, res) => {
    try {
        const internship = await Internship.find().lean().exec(); 
        res.status(400).send(internship);
        
    }
    catch (err) {
        res.status(400).send(err.message) 
    }

})

router.post('/', async (req, res) => {
    try {
        const internship = await Internship.create(req.body); 
        res.status(200).send(internship);
        
    }
    catch (err) {
        res.status(400).send(err.message)
        console.log(err)
    }

})

router.patch('/:id', async (req, res) => {
    try {
        const internship = await Internship.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec(); 
        res.status(200).send(internship);
        
    }
    catch (err) {
        res.status(400).send(err.message)
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const internship = await Internship.findByIdAndDelete(req.params.id).lean().exec(); 
        res.status(200).send(internship);
        
    }
    catch (err) {
        res.status(400).send(err.message) 
    }

})

module.exports = router; 