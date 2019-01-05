const mongoose = require('mongoose'),
	userSchema = require('./schemas/userSchema');

module.exports = {
	User: mongoose.model('user', userSchema),
};
