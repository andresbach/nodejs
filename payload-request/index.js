var express = require('express');

var app = express();

app.use(express.json());

app.post('/', function(req, res){
	console.log(req.body);      // input
	res.send(req.body);    // output
});

app.post('/send/:message', function(req, res) {
	let message = req.params.message;
	let page = req.query.page;
	res.send(message + ' ' + page);
})

app.listen(3000);
