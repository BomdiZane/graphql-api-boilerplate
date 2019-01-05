const mongoose = require('mongoose'),
	{ passwordRegEx, bagsMax } = require('../../utils/constants'),
	{ formatName } = require('../../utils/helpers');

module.exports = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, 'First name is required'],
			set: val => formatName(val),
		},
		lastName: {
			type: String,
			required: [true, 'Last name is required'],
			set: val => formatName(val),
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
			match: [passwordRegEx, 'Invalid password! Password should be at lease 8 characters long, and include at least 1 uppercase letter, 1 lowercase letter and 1 number']
		},
		dateOfBirth: Date,
		active: {
			type: Boolean,
			default: true
		},
		startedOn: {
			type: Date,
			default: Date.now,
			get: val => new Date(val).toDateString(),
		},
		bags: {
			type: Number,
			set: val => Math.round(val),
			min: [0, 'user cannot have less than zero bags'],
			max: [bagsMax, `user cannot have more than ${ bagsMax } bags`],
			required: [true, 'Bags is required'],
		}
	},
	{
		usePushEach: true
	}
);
