var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = Schema({
    nombrecliente: String,
    direccion: String,
    email: String,
    telefono: String
    


});

const clientes = mongoose.model('cliente',clienteSchema);
module.exports = clientes;