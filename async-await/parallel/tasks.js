// 2 funciones de los procesos que haria las tareas asincronas
// setTimeout(function () {}) ejecuta cierto codigo despues de cierto intervalo de tiempo, es async
const util = require('util');

// promisify transforma funciones que se manejan con callbacks a funciones que manejan promesas (entonces puedo utilizar async await con setTimeout)
const sleep = util.promisify(setTimeout);

module.exports = {

	// esta tarea tiene un delay de 4s
	async taskOne() {
		try {
			throw new Error('SOME PROBLEM');
			await sleep(4000);
			return 'ONE VALUE';
		} catch(e) {
				console.log(e);
		}
	},

	// esta tarea tiene un delay de 2s
	async taskTwo() {
		try {
			// throw new Error('SOME PROBLEM');
			await sleep(2000);
			return 'TWO VALUE';
		}
		catch(e) {
			console.log(e);
		}
	}
};
