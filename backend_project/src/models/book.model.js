

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    body: { type: String, required: true },
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true,
    },
    authorsIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true,
    }],
    checkoutId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "checkout",
    },
}, {
    versionKey: false,
    timestamps: true
});
const Book = mongoose.model("book", bookSchema);


module.exports = Book;