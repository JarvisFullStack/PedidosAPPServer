const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let negocioProductoSchema = new Schema({

});

module.exports = mongoose.model('NegocioProducto', negocioProductoSchema);