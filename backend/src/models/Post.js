const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    nome: String,
    periodo: String,
    telefone: {
        type: Number
    },
    responsavel: String,
    email:String,
    image: String,
    
    quantidadeave:{
        type: Number,
        defalt: 0,
    },
    quantidadeovo:{
        type: Number,
        defalt: 0,
    },
    peso1:{
        type: Number,
        defalt: 0,
    },
    peso2:{
        type: Number,
        defalt: 0,
    },
    peso3:{
        type: Number,
        defalt: 0,
    },
    peso4:{
        type: Number,
        defalt: 0,
    }

}, {

    timestamps: true,


});

module.exports = mongoose.model('Post', PostSchema);