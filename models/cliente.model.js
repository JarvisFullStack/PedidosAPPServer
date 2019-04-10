const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
let Schema = mongoose.Schema;


let clienteSchema = new Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es un campo obligatorio']
    },
    Apellido: {
        type: String,
        required: [true, 'El apellido es un campo obligatorio']
    },
    Direccion: {
        type: String,
        required: [true, 'La direccion es un campo obligatorio']
    },
    Balance: {
        type: Number,

    },
    Email: {
        type: String,
        unique: true,
        required: [true, 'El Email es un campo obligatorio']
    },
    Pedidos: [{
        Nombre_Producto: String,
        Precio_Producto: Number,
        Cantidad: Number,
        Fecha: Date
    }]
});


clienteSchema.plugin(uniqueValidator, {
    message: '{PATH} debe ser unico'
});

module.exports = mongoose.model('Cliente', clienteSchema);