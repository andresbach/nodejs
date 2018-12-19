const express = require('express');
const app = express();

// me permite manejar las rutas de las carpetas dentro del server y os
const path = require('path');

// para conectarme a mongodb
const mongoose = require('mongoose');

// para configurar como me autentico al sistema
const passport = require('passport');

// flash
const flash = require('connect-flash');

// para mostrar por consola los eventos que ocurren en el server
const morgan = require('morgan');

// para administrar las cookies
const cookieParser = require('cookie-parser');

// para procesar la info que viene desde el navegador al server
const bodyParser = require('body-parser');

// para levantar el server
const session = require('express-session');

// importo la db y me conecto (ahora hay que utilizar { useNewUrlParser: true } para conectarse o sino chilla)
const { url } = require('./config/database');
mongoose.connect(url, {
	useNewUrlParser: true
})

// settings
// Pruebo si el sistema operativo tiene un puerto establecido, de lo contrario, usa el 3000
app.set('port', process.env.PORT || 3000 );

// middlewares

// routes

// static files

app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'));
});
