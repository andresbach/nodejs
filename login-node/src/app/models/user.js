// Aca va a estar como va a lucir el usuario en la db
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
	local: {
		email: String,
		password: String
	},
	facebook: {
		email: String,
		password: String,
		id: String,
		token: String
	},
	twitter: {
		email: String,
		password: String,
		id: String,
		token: String
	},
	google: {
		email: String,
		password: String,
		id: String,
		token: String
	}
});

// la funcion recibe una contraseña y devuelve la contraseña cifrada para meterla en la db
userSchema.methods.generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

// metodo que recibe la contraseña y la compara con la que tengo cifrada en mi db
userSchema.methods.validatePassword = function (password) {
	return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', userSchema);
