const mongoose = require('mongoose');

const scheme = new mongoose.Schema(
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

const schemeBook = mongoose.models.books || mongoose.model('books', scheme);
module.exports = schemeBook;