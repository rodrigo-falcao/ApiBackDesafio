const mongoose = require('mongoose');

const scheme = new mongoose.Schema(
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

const schemeBook = mongoose.models.books || mongoose.model('books', scheme);
module.exports = schemeBook;