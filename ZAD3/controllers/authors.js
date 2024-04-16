const Author = require('../models/author');

const authorsController = (req, res) => {
    const authors = [new Author(1, 'Author 1')];
    res.render('authors', { authors });
};

module.exports = authorsController;
