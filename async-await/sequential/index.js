// archivo del programa

const { taskOne, taskTwo } = require('./tasks');

async function main() {
	try {
		console.time('Measuring time');
		const valueOne = await taskOne();
		const valueTwo = await taskTwo();
		console.timeEnd('Measuring time');

		console.log('Task One returned', valueOne);
		// throw new Error('SOME PROBLEM2');
		console.log('Task Two returned', valueTwo);
	} catch(e) {
		console.log(e);
	}
}

main();
