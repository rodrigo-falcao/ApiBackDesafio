const express = require('express');
const tratarErrosEsperados = require('../functions/tratarErrosEsperados');
const conectarBancoDados = require('../middlewares/conectarBD');
const schemeBook = require('../models/books.js');
const router = express.Router();

router.post('/criar', conectarBancoDados, async function (req, res) {
try {
// #swagger.tags = ['Livros']
// #swagger.description = "Criar um novo arquivo de livros conforme solicitado no Desafio."
let { posicao, titulo, descricao, status, dataEntrega } = req.body;
const usuarioCriador = req.usuarioJwt.id;
const respostaBD = await schemeBook.create({ posicao, titulo, descricao, status, dataEntrega, usuarioCriador });

res.status(200).json({
    status: "OK",
    statusMensagem: "Livro criada com sucesso.",
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
let idTarefa = req.params.id;
let { posicao, titulo, descricao, status, dataEntrega } = req.body;
const usuarioLogado = req.usuarioJwt.id;

const checkTarefa = await schemeBook.findOne({ _id: idTarefa, usuarioCriador: usuarioLogado });
if (!checkTarefa) {
    throw new Error("Tarefa não encontrada ou pertence a outro usuário");
}

const tarefaAtualizada = await schemeBook.updateOne({ _id: idTarefa }, { posicao, titulo, descricao, status, dataEntrega });
if (tarefaAtualizada?.modifiedCount > 0) {
    const dadosTarefa = await schemeBook.findOne({ _id: idTarefa });

    res.status(200).json({
    status: "OK",
    statusMensagem: "Tarefa atualizada com sucesso.",
    resposta: dadosTarefa
    })
}
} catch (error) {
return tratarErrosEsperados(res, error);
}
});


router.get('/obter/usuario', conectarBancoDados, async function (req, res) {
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
const idTarefa = req.params.id;
const usuarioLogado = req.usuarioJwt.id;

const checkTarefa = await schemeBook.findOne({ _id: idTarefa, usuarioCriador: usuarioLogado });
if (!checkTarefa) {
    throw new Error("Tarefa não encontrada ou pertence a outro usuário");
}

const respostaBD = await schemeBook.deleteOne({ _id: idTarefa });
res.status(200).json({
    status: "OK",
    statusMensagem: "Tarefa deletada com sucesso.",
    resposta: respostaBD
})

} catch (error) {
return tratarErrosEsperados(res, error);
}
});

module.exports = router;