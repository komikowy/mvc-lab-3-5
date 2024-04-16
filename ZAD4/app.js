const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const homeRoutes = require('./routes/home');
const booksRoutes = require('./routes/books');
const authorsRoutes = require('./routes/authors');

app.use('/', homeRoutes);
app.use('/book', booksRoutes);
app.use('/author', authorsRoutes);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
