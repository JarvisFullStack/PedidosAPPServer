const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;


let negocioSchema = new Schema({

});


negocioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe ser unico'
});

module.exports = mongoose.model('Negocio', negocioSchema);