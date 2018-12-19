// archivo del programa

const { taskOne, taskTwo } = require('./tasks');

async function main() {
	const valueOne = await taskOne();
	const valueTwo = await taskTwo();

	console.log('Task One returned', valueOne);
	console.log('Task Two returned', valueTwo);
}

main();
