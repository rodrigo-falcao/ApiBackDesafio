const mongoose = require('mongoose');

const esquema = new mongoose.Schema(
    {
        titulo: {
        type: String,
        required: 'é obrigatório!',
        },
        num_paginas: {
        type: Number,
        required: 'é obrigatório!',
        },
        isnb: {
        type: String,
        default: '',
        },
        editora: {
        type: String,
        required: 'é obrigatório!',
        },
    },
    {
        timestamps: true
    }
);

const schemeBook = mongoose.models.books || mongoose.model('books', esquema);
module.exports = schemeBook;