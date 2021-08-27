const mongoose = require('mongoose');

const educationalDetailSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true},
    about: { type: String, required: true},
    edu_level: { type: String, required: true },
    inst_name: { type: String, required: true },
    degree: { type: String, required: true },
    edu_year: { type: String, required: true },
    experience_type: { type: String, required: true },
    job_role: { type: String, required: true },
    experience_duration: { type: String, required: true },
    responsibility: { type: String, required: true },
    skills: { type: String, required: false },
    preference: { type: String, required: true },
    hobbies: { type: String, required: false },
    achievements: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: false },
    languages: { type: String, required: false }
    },{
    versionKey: false,
    timestamps:true 
});

const EducationalDetail = mongoose.model('educationalDetail', educationalDetailSchema);


module.exports = EducationalDetail;



