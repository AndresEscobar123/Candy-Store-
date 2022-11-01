var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inventariosSchema = Schema({
    descripcion: String,
    precioventa: Number,
    preciocompra: Number,
    cantidad: Number,
    fechaultimaentreda: Number



});

const inventarios = mongoose.model('inventario',inventariosSchema);
module.exports = inventarios;