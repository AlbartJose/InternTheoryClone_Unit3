const mongoose = require("mongoose")

// knowMore schema and model

const knowMoreSchema = new mongoose.Schema({
   course_name: {type: String, required: true},
   course_para: {type: String, required: true},
   syllabus:[{type: String, required: true}],
   similar_courses:[{type: String, required: true}],        
   courseId:{
            type:mongoose.Schema.Types.ObjectId,
             ref: "course",
            required: true},
    duration:{type: String, required: true}
},{
    versionKey: false,
    timestamps: true
})

const knowMore = mongoose.model("knowMore", knowMoreSchema)


module.exports = knowMore