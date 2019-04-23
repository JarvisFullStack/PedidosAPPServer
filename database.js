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

