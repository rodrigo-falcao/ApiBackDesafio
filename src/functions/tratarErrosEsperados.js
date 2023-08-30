const S = require('string');

// Pode receber tanto uma resposta como um error também. Pode ser uma string ou um Json
function tratarErrosEsperados(res, err) {

//   Entrar quando o moogonsee der algum erro, deixando a frase de erro mais clear.
if (String(err).includes(`ValidationError:`)) {
    return res.status(400).json({
        status: "Erro",
        statusMensagem: S(String(err).replace("ValidationError: ", "")).replaceAll(':', '').s,
        resposta: String(err)
    });
}

//   Pode ser um erro definito manualmente por mim
if (String(err).includes(`Error:`)) {
    return res.status(400).json({
    status: "Erro",
    statusMensagem: String(err).replace("Error: ", ""),
    resposta: String(err)
    });
}
//   Erro inesperado
    console.error(err);
        return res.status(500).json({
        status: "Erro",
        statusMensagem: "Houve um problema inesperado, tente novamente mais tarde.",
        resposta: String(err)
        });
}

module.exports = tratarErrosEsperados;