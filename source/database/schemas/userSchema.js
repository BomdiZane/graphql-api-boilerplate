const mongoose = require('mongoose'),
	{ genderEnum, passwordRegEx, userNameMinLength, userNameMaxLength } = require('../../utils/constants'),
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
		email: {
			type: String,
			required: [true, 'Email is required'],
			lowercase: true,
			unique: true,
			sparse: true
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
			match: [passwordRegEx, 'Invalid password! Password should be at lease 8 characters long, and include at least 1 uppercase letter, 1 lowercase letter and 1 number']
		},
		userName: {
			type: String,
			set: val => formatName(val),
			minlength: [userNameMinLength, `userName must be at least ${userNameMinLength} characters long`],
			maxlength: [userNameMaxLength, `userName cannot be more that ${userNameMaxLength} characters`],
			unique: true,
			sparse: true
		},
		dateOfBirth: Date,
		gender: {
			type: String,
			enum: genderEnum,
		},
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
			min: [0, 'user cannot have less than zero bags']
		}
	},
	{
		usePushEach: true
	}
);
