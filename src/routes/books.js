const express = require('express');
const tratarErrosEsperados = require('../functions/tratarErrosEsperados');
const conectarBancoDados = require('../middlewares/conectarBD');
const schemeBook = require('../models/books.js');
const router = express.Router();

router.post('/criar', conectarBancoDados, async function (req, res) {
try {
// #swagger.tags = ['Livros']
// #swagger.description = "Criar um novo arquivo de livros conforme solicitado no Desafio."
let { titulo, num_paginas, isnb, editora } = req.body;
const respostaBD = await schemeBook.create({ titulo, num_paginas, isnb, editora });

res.status(200).json({
    status: "OK",
    statusMensagem: "Livro criado com sucesso.",
    resposta: respostaBD
})

} catch (error) {
return tratarErrosEsperados(res, error);
}
});

router.put('/editar/:id', conectarBancoDados, async function (req, res) {
try {
// #swagger.tags = ['Livros']
// #swagger.description = "Editar o arquivo selecionado."
let idBook = req.params.id;
let { titulo, num_paginas, isnb, editora } = req.body;

const checkTarefa = await schemeBook.findOne({ _id: idBook });
if (!checkTarefa) {
    throw new Error("Livro não encontrada ou pertence a outro usuário");
}

const tarefaAtualizada = await schemeBook.updateOne({ _id: idBook }, { titulo, num_paginas, isnb, editora });
if (tarefaAtualizada?.modifiedCount > 0) {
    const infoBooks = await schemeBook.findOne({ _id: idBook });

    res.status(200).json({
    status: "OK",
    statusMensagem: "Livro atualizado com sucesso.",
    resposta: infoBooks
    })
}
} catch (error) {
return tratarErrosEsperados(res, error);
}
});


router.get('/obter/livro', conectarBancoDados, async function (req, res) {
try {
// #swagger.tags = ['Livros']
// #swagger.description = "Endpoint para obter todas tarefas do usuario logado."
const usuarioLogado = req.usuarioJwt.id;
const respostaBD = await schemeBook.find({ usuarioCriador: usuarioLogado });

res.status(200).json({
    status: "OK",
    statusMensagem: "Tarefas listadas na respota com sucesso.",
    resposta: respostaBD
})

} catch (error) {
return tratarErrosEsperados(res, error);
}
});


router.delete('/deletar/:id', conectarBancoDados, async function (req, res) {
try {
// #swagger.tags = ['Livros']
// #swagger.description = "Deleção do arquivo selecionado."
const idBook = req.params.id;

const checkTarefa = await schemeBook.findOne({ _id: idBook });
if (!checkTarefa) {
    throw new Error("Livro não encontrado ou pertence a outro usuário");
}

const respostaBD = await schemeBook.deleteOne({ _id: idBook });
res.status(200).json({
    status: "OK",
    statusMensagem: "Livro deletada com sucesso.",
    resposta: respostaBD
})

} catch (error) {
return tratarErrosEsperados(res, error);
}
});

module.exports = router;