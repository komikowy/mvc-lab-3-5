const express = require('express');
const router = express.Router();

let books = [];

router.get('/list', (req, res) => {
    res.render('books', { books });
});

router.get('/add', (req, res) => {
    res.render('add-book');
});

router.post('/add', (req, res) => {
    const { title, author, publishingYear } = req.body;
    
    const newBookId = books.length > 0 ? books[books.length - 1].id + 1 : 1;

    const newBook = {
        id: newBookId,
        title,
        author,
        publishingYear
    };

    books.push(newBook);

    res.redirect('/book/list');
});

router.get('/:id', (req, res) => {
    const bookId = parseInt(req.params.id);

    const book = books.find(book => book.id === bookId);
    if (!book) {
        return res.status(404).send('Book not found');
    }

    res.render('book', { book });
});

router.get('/delete/:id', (req, res) => {
    const bookId = parseInt(req.params.id);

    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex === -1) {
        return res.status(404).send('Book not found');
    }

    books.splice(bookIndex, 1);

    res.redirect('/book/list');
});

module.exports = router;
