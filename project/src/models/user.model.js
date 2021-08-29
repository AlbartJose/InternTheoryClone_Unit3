

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    mobile_no: { type: Number, required: true },
    cities: { type: String },
    recommend: { type: String },
    suggest: { type: String },
    affilate: { type: String },
    signedIn: { type: Boolean, default: false },
    internshipIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'internship',
    }],
    jobIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "job",
    }],
    courseIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
    }],
    educationDetailsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "educationaldetail",
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cartitem",
    },
    otherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "other",
    }

}, {
    versionKey: false,
    timestamps: true
});
const User = mongoose.model("user", userSchema);

module.exports = User;
