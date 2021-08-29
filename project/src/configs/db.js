
const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://team:Interntheory0203@cluster0.thgqv.mongodb.net/interntheory?retryWrites=true&w=majority", {
        useNewUrlParser: true,             //tuning mongoose connect- important(Read More)
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
};

module.exports = connect;