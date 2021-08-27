const mongoose = require('mongoose');


const internshipSchema = new mongoose.Schema({
    image: {type: String, required: true },
    job_title: { type: String, required: true },
    company_name: { type: String, required: true },
    type: { type: String, required: true },
    preferences: { type: String, required: true },
    city: [{ type: String, required: true }],
    stipend: { type: String, required: true },
    
}, {
    versionKey: false,
    timestamps:true 
});

const Internship = mongoose.model('internship', internshipSchema);

module.exports = Internship;