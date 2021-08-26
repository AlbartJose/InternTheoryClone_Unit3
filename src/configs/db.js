const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://team:Interntheory0203@cluster0.thgqv.mongodb.net/interntheory?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
}

module.exports = connect;
