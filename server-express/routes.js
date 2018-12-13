const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	// res.end('Hello World');
	res.render('index.ejs')
});

router.get('/login', (req, res) => {
	res.render('login')
});

// router.get('/login', (req, res) => {
// 	res.end('Aqui va el login');
// });

module.exports = router;
