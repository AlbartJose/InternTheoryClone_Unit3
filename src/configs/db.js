const mongoose = require("mongoose")

module.exports = connect = () => {
    return mongoose.connect("mongodb+srv://team:Interntheory0203@cluster0.thgqv.mongodb.net/interntheory?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
}
