const express = require('express');
const bodyParser = require('body-parser');

// Inicializaciones
const app = express();

// configuraciones
const port = process.env.PORT || 3000;
app.set('port', port);

// rutas principales 
app.get('/api/negocios', (req, res) => {
    res.status(200).json( {
       
            Nombre_Comercial: 'comercial1',
            Direccion: 'direccion1',
            Email: 'email1',
            Productos: [
                   {
                       Precio_Unidad: 100,
                       Stock: 3,
                       Nombre: 'acena',
                   }
            ],
        });
    
});



// corriendo servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})