function routes(app) {
    app.use('/tarefa', require('./routes/books.js'));
    return;
}

module.exports = routes;