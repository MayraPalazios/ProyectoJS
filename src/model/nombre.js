const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const nom = new Schema({
    nAutor: String,
    nNota: String,
    nLibro: String
});
module.exports=mongoose.model('nombre', nom);