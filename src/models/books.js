const mongoose = require('mongoose');

const esquema = new mongoose.Schema(
    {
        Titulo: {
        type: Number,
        required: 'é obrigatório!',
        },
        Paginas: {
        type: String,
        required: 'é obrigatório!',
        },
        ISBN: {
        type: String,
        default: '',
        },
        Editora: {
        type: String,
        required: 'é obrigatório!',
        },
    },
    {
        timestamps: true
    }
);

const EsquemaTarefa = mongoose.models.books || mongoose.model('books', esquema);
module.exports = EsquemaTarefa;