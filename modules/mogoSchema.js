let mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: Date,
    thumbnailUrl: String,
    status: String,
    authors: [ String ],
    categories: [ String ]
  });

const Book = mongoose.model("mybooks", bookSchema);

module.exports = Book;