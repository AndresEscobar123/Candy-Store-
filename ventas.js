var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ventaSchema = Schema({
    descripcion: String,
    precioventa: Number,
    cantidad: Number,
    fechaventa: Number



});

const ventas = mongoose.model('venta',ventaSchema);
module.exports = ventas;