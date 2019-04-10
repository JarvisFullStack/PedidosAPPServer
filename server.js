//const express = require('express');
const mongoose = require('mongoose');
require('./config/config');
const Cliente = require('./models/cliente.model');
mongoose.connect(process.env.URLDB,
    {
        useNewUrlParser: true, useCreateIndex: true
    }, (err, res) => {
        if(err) throw err;
        console.log('Conexion con base de datos establecida!');
});


let cliente = new Cliente({
    Nombre: 'Luis Felipe',
    Apellido: 'Muñoz Flores',
    Direccion: 'Cenovi',
    Balance: 0,
    Email: 'luis@hotmail.com',
    Pedidos:[
        

    {
        Nombre_Producto: 'Jugo Naranja',
        Precio_Producto: 100.00,
        Cantidad: 1,
        Fecha: Date.now()
    },
    {
        Nombre_Producto: 'Sandwich Completo',
        Precio_Producto: 120.00,
        Cantidad: 1,
        Fecha: Date.now()
    },
    {
        Nombre_Producto: 'Guineo',
        Precio_Producto: 5,
        Cantidad: 4,
        Fecha: Date.now()
    }]
    
});

let cliente2 = new Cliente({
    Nombre: 'Juan Jose',
    Apellido: 'Perez',
    Direccion: 'Mella, Libertad, SFM',
    Balance: 0,
    Email: 'juanperez@hotmail.com',
    Pedidos:[
        

    {
        Nombre_Producto: 'Jugo Pera',
        Precio_Producto: 100.00,
        Cantidad: 2,
        Fecha: Date.now()
    },
    {
        Nombre_Producto: 'Tostada',
        Precio_Producto: 70.00,
        Cantidad: 2,
        Fecha: Date.now()
    },
    {
        Nombre_Producto: 'Manzana Verde',
        Precio_Producto: 15,
        Cantidad: 2,
        Fecha: Date.now()
    }]
    
});

cliente2.save((err, clienteDB) => {
    if(err) {
        console.log('Error al intentar guardar el cliente en la base de datos!');
        return;
    }
    console.log('Usuario Guardado Correctamente!');
    console.log(clienteDB);
    return;
});

cliente.save((err, clienteDB) => {
    if(err) {
       console.log('Error al intentar guardar en la base de datos');
       return;
    }
    console.log('Usuario Guardado Correctamente!');
    console.log(clienteDB);
    return;

    
    
});