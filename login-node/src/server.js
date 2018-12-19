const express = require('express');
const app = express();

// settings
// Pruebo si el sistema operativo tiene un puerto establecido, de lo contrario, usa el 3000
app.set('port', process.env.PORT || 3000 );

// middlewares

// routes

// static files

app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'));
});
