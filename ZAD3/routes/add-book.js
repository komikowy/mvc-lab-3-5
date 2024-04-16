const express = require('express');
const router = express.Router();

const Book = require('../models/book');

let books = [];

router.get('/', (req, res) => {
    res.render('add-book');
});

router.post('/', (req, res) => {
    const { title, publishingYear, authorId } = req.body;
    const newBook = new Book(title, publishingYear, authorId);
    books.push(newBook);
    res.redirect('/book/list');
});

module.exports = router;
