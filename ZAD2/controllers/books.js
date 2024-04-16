const Book = require('../models/book');

const booksController = (req, res) => {
    const books = [new Book(1, 'Book 1', 2022, 1)];
    res.render('books', { books });
};

module.exports = booksController;
