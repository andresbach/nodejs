const express = require('express');
const app = express();

const path = require('path'); // me permite manejar las rutas de las carpetas dentro del server y os

const mongoose = require('mongoose'); // para conectarme a mongodb

const passport = require('passport'); // para configurar como me autentico al sistema

const flash = require('connect-flash'); // flash

const morgan = require('morgan'); // para mostrar por consola los eventos que ocurren en el server

const cookieParser = require('cookie-parser'); // para administrar las cookies

const bodyParser = require('body-parser'); // para procesar la info que viene desde el navegador al server

const session = require('express-session'); // para levantar el server

const { url } = require('./config/database'); // importo la db y me conecto (ahora hay que utilizar { useNewUrlParser: true } para conectarse o sino chilla)
mongoose.connect(url, {
	useNewUrlParser: true
})


require('./config/passport')(passport);
// settings (creo keys que representen tanto configuraciones como ubicaciones de archivos)
// Pruebo si el sistema operativo tiene un puerto establecido, de lo contrario, usa el 3000
app.set('port', process.env.PORT || 3000 );
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false})); // la info de los formularios la identifico desde la url y no quiero procesar imagenes
app.use(session({ // maneja las sesiones de express
	secret: 'pruebadeserver', // variable de entorno de palabra secreta
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize()); // como nos autenticamos
app.use(passport.session()); // para que no tenga que constantemente pedirle autenticacion al usuario una vez que entro
app.use(flash());

// routes
require('./app/routes')(app, passport);


// static files
app.use(express.static(path.join(__dirname, 'public'))); // donde estan los archivos de la pagina estaticos, imagens, fuentes, css


app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'));
});
