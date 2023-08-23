function routes(app) {
    app.use('/books', require('./routes/books.js'));
    return;
}

module.exports = routes;