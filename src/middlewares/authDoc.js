async function authDocProducao(req, res, next) {
    const { senhaDigitada } = req.body;

    // Usuário na condição de localhost (sem autenticação)
    if (req.headers.host.includes('localhost') || req.originalUrl !== "/doc/"){
        return next();
    }

    // tratamento para senha correta
    if (senhaDigitada === process.env.SWAGGER_SENHA_DOC) {
        return next();
    }

    // tratamento para senha errada
    if (senhaDigitada) {
        res.status(401).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
        <form method="post">
            <p style="color:red;">Senha Errada!</p>
            <label for="senhaDigitada">Senha da documentação:</label>
            <input type="password" name="senhaDigitada" id="senhaDigitada" />
            <button type="submit">Entrar</button>
        </form>
        `))
    // Caso o usuário ainda não digitou a senha estando em modo produção
    }else {
        res.status(200).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
        <form method="post">
            <label for="senhaDigitada">Senha da documentação:</label>
            <input type="password" name="senhaDigitada" id="senhaDigitada" />
            <button type="submit">Entrar</button>
        </form>
        `))
    }
}

module.exports = authDocProducao;