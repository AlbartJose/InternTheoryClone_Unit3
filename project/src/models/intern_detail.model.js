const mongoose = require('mongoose');

const Internship = require('../models/internship.model');

const internDetailSchema = new mongoose.Schema({
    openings: { type: Number, required: true },
    duration: { type: String, required: true },
    startDate: { type: String, required: true },
    applicationDeadline: { type: String, required: true },
    locations: [{ type: String, required: true }],
    stipend1:{ type: String, required: true},
    preferredSkills: [{ type: String, required: true }],
    content1: { type: String, required: true },
    content2: { type: String, required: false },
    responsibilities: [{ type: String, required: false }],
    description:{ type: String, required: true},

    internshipId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "internship",
        required:true}
}, {
    versionKey: false,
    timestamps:true 
});

const InternDetail = mongoose.model('internDetail', internDetailSchema);


module.exports = InternDetail;