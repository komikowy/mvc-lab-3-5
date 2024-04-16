const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const homeRoutes = require('./routes/home');
app.use('/', homeRoutes);

const booksRoutes = require('./routes/books');
app.use('/book', booksRoutes);

const authorsRouter = require('./routes/authors');
app.use('/author', authorsRouter);

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
