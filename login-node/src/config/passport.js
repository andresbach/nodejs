const LocalStrategy = require('passport-local').Strategy;

// defino el modelo de usuario
const User =  require('../app/models/user');

module.exports = function (passport) {

	// utilizo una cookie para que no me pida todo el tiempo el login
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	// me permite hacer el signup
	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function (req, email, password, done) { // este es el callback
		User.findOne({'local.email': email}, function (err, user) {
			if (err) { return done(err); }
			if (user) {
				return done(null, false, req.flash('signupMessage', 'The email is already taken.'));
			} else {
				var newUser = new User();
				newUser.local.email = email;
				newUser.local.password = newUser.generateHash(password);
				newUser.save(function (err) {
					if (err) {throw err;}
					return done(null, newUser);
				});
			}
		})
	}));

	// me permite hacer el login
	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function (req, email, password, done) { // este es el callback
		User.findOne({'local.email': email}, function (err, user) {
			if (err) { return done(err); }
			if (!user) {
				return done(null, false, req.flash('loginMessage', 'No User found.'));
			}
			if (!user.validatePassword(password)) {
				return done(null, false, req.flash('loginMessage', 'Wrong password'));
			}
			return done(null, user);
		})
	}));
}
