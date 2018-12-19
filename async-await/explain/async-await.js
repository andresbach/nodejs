// await solo puede usarse en funciones que estan dentro de una funcion que tiene async puesto

async function requestHandler(req, res) {
	// para manejar errores que tenia de las promises, uso try catch
	// try trata de ejecutar el codigo y el catch captura los errores
	try {
		// lo que sigue del await le dice que va a tomar tiempo
		const user = await User.findById(req.userId);
		await const tasks = Tasks.findById(user.tasksId);
		tasks.completed = true;
		await tasks.save();
		res.send('Task Completed');
	}
	catch(e) {
		res.send(e);
	}
}
