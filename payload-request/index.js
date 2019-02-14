var express = require('express');

var app = express();

app.use(express.json());

app.post('/', function(request, response){
	console.log(request.body);      // input
	response.send(request.body);    // output
});

app.listen(3000);
