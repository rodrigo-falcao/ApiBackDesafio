const jwt = require('jsonwebtoken');
const tratarErrosEsperados = require('../functions/tratarErrosEsperados');

async function authUser(req, res, next) {
    const token = req.headers['x-auth-token'];

    //Está checando se não está preenchido o token entra no if
    if (!token) {
        return tratarErrosEsperados(res, new Error("Token de autenticação não fornecido"));
    }

    //Descriptografar o token informando o JWT_SECRET na variável de ambiente.
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.usuarioJwt = decoded;

        next();
    } catch (error) {
        console.error(error);
        return tratarErrosEsperados(res, new Error("Token de autenticação inválido"));
    }
}

module.exports = authUser;