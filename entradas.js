var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entradaSchema = Schema({
    descripcion: String,
    preciocompra: Number,
    cantidad: Number,
    fechaentreda: Number



});

const entredas = mongoose.model('entrada',entradaSchema);
module.exports = entredas;