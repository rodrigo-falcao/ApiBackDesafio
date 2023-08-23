function routes(app) {
    app.use('/usuario', require('./routes/usuario.js'));
    app.use('/tarefa', require('./routes/tarefas.js'));
    return;
}

module.exports = routes;