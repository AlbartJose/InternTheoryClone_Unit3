const mongoose = require("mongoose");

// course schema and model

const courseSchema = new mongoose.Schema(
    {
        img_src:{type:String,require:true},
        name : {type:String, require:true},
        description:{type:String,require:true},
        xprice: {type:Number, require: true},
        price: {type:Number, require: true},
        emi_text:{type:String, require:true},
    },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Course = mongoose.model("course", courseSchema);

module.exports = Course;
