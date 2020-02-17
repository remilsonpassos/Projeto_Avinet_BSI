const Post  = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');


module.exports = {
async index( req, res){
const posts = await Post.find().sort('-createdAt');

return res.json(posts);
},

async store (req,res) {
   const { nome, periodo, telefone, responsavel, quantidadeovo, quantidadeave, email, peso1, peso2, peso3, peso4, } = req.body;
   const {filename : image } = req.file;

   await sharp(req.file.path)
    .resize(500)
    .jpeg({ quality: 70})
    .toFile(
        path.resolve(req.file.destination, 'resized', image)
    )
 fs.unlinkSync(req.file.path);

   const post = await Post.create({
    nome,
    periodo,
    telefone,
    responsavel,
    quantidadeave,
    quantidadeovo,
    email,
    image,
    peso1,
    peso2,
    peso3,
    peso4,


   })

   req.io.emit('post', post);
   
    return res.json({post});
    
}
};