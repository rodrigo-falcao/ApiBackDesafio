# Desafio API Backend
Link do servidor de produção: https://api-back-desafio.vercel.app/doc/  <br>
Feito para avaliação, tendo todas as funções do CRUD, além de fazer a leitura do livro também por ID.

<p align="center">
  <img src="https://github.com/rodrigo-falcao/ApiBackDesafio/assets/125101340/98804575-3ef6-41aa-a453-ca5d863fe736" alt="Imagem projeto" style="width: 650px;">
</p>

## Scripts Disponíveis
No diretório do projeto, você pode executar os seguintes scripts:

- npm start
Inicia o servidor utilizando o Node.js. O servidor será executado na porta padrão 4000.

- npm run dev
Utiliza o nodemon para iniciar o servidor em modo de desenvolvimento, permitindo que o servidor reinicie automaticamente ao detectar alterações nos arquivos.

- npm run autoDoc
Gera a documentação do Swagger automaticamente com base nos endpoints definidos no arquivo src/routes.js.

## Variáveis de Ambiente
Certifique-se de criar um arquivo .env na raiz do projeto e definir as seguintes variáveis de ambiente:

- NODE_ENV=<VARIAVEL_DO_AMBIENTE_QUE_ESTA_RODANDO>
- MONGODB_URI=<URL_DO_BANCO_DE_DADOS_MONGODB>
- SWAGGER_SENHA_DOC=<SENHA_PARA_ACESSAR_DOCUMENTACAO_SWAGGER>

## Endpoints da API
A API possui os seguintes endpoints:

- POST /livros/criar   <b>Cria um novo livro.</b>
- PUT /livros/editar/:id   <b>Edita um livro existente por ID.</b>
- GET /livros/obter/livro:   <b>Obtém todos os livros.</b>
- GET /livros/obter/livro/:id   <b>Obtém um livro por ID.</b>
- DELETE /livros/deletar/:id   <b>Deleta um livro por ID.</b>

## Tecnologias Utilizadas
- Node.js: Plataforma de execução de código JavaScript do lado do servidor.
- Express.js: Framework web para Node.js, utilizado para criar a estrutura da API.
- MongoDB: Banco de dados NoSQL utilizado para armazenar os dados da aplicação.
- Mongoose: Biblioteca ODM (Object Data Modeling) para MongoDB, utilizada para modelar os dados e interagir com o banco de dados.
- dotenv: Biblioteca para carregar variáveis de ambiente a partir de um arquivo .env.
- swagger-autogen: Biblioteca para a geração automática da documentação do Swagger.
- swagger-ui-express: Biblioteca para a visualização da documentação do Swagger na forma de uma interface interativa.
- nodemon: Utilitário que monitora as mudanças nos arquivos e reinicia automaticamente o servidor.
- debug: Biblioteca para a adição de mensagens de debug no código.
- validator: Biblioteca para a validação de dados.

Este projeto foi desenvolvido como parte do desafio para a escola DNC. <br>

