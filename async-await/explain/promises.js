function requestHandler(req, res) {
	User.findById(req.userId, function(err, user) {
		if(err) {
			res.send(err);
		} else {
			Tasks.findById(user.tasksId, function(err, tasks) {
				if (err) {
					return res.send(err);
				} else {
					tasks.completed = true;
					tasks.save(function (err) {
						if (err) {
							return res.send(err);
						} else {
							res.send('Task Completed');
						}
					})
				}
			})
		}
	})


}

function requestHandler(req, res) {
	User.findById(req.userId)
		// Metodo then es cuando todo anda bien y le da al callback el user que arroja la funcion findById
		.then(function (user) {
			// res.send(user);
			return Tasks.findById(user.tasksId)
		})
		.then(function (tasks) {
			tasks.completed = true;
			return tasks.save();
		})
		// el then ocurre cuando le devuelvo un return o tiene que esperar la devolucion de algo
		.then(function () {
			res.send('Tasks completed');
		})
		// Metodo catch es cuando ocurre algun error de cualquiera de las operaciones
		.catch(function (errors) {
			res.send(errors);
		})
}
