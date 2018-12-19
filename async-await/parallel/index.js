// archivo del programa

const { taskOne, taskTwo } = require('./tasks');

async function main() {
	try {
		console.time('Measuring time');
		// añado todas las tareas que quiero hacer en paralelo
		const results = await Promise.all([taskOne(), taskTwo()])

		console.timeEnd('Measuring time');

		console.log('Task One returned', results[0]);
		// throw new Error('SOME PROBLEM2');
		console.log('Task Two returned', results[1]);
	} catch(e) {
		console.log(e);
	}
}

main();
