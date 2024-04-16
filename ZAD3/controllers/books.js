const Book = require('../models/book');

const booksController = async (req, res) => {
    try {
        const books = await Book.getAllBooks();

        res.render('books', { books });
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Internal Server Error');
    }
};

const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;

        await Book.deleteBookById(bookId);

        res.redirect('/book/list');
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    booksController,
    deleteBook
};
