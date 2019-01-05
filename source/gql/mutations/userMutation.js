const graphql = require('graphql'),
	{ GraphQLString, GraphQLNonNull, GraphQLID, GraphQLBoolean, GraphQLInt, } = graphql,
	UserType = require('../types/userType'),
	{ User } = require('../../database/models'),
	updateOptions = {
		new: true,
		runValidators: true,
	};

module.exports = {
	createUser: {
		type: UserType,
		args: {
			firstName: { type: GraphQLNonNull(GraphQLString) },
			lastName: { type: GraphQLNonNull(GraphQLString) },
			password: { type: GraphQLNonNull(GraphQLString) },
			dateOfBirth: { type: GraphQLString },
			bags: { type: GraphQLNonNull(GraphQLInt) },
		},
		resolve(parent, args){ return new User({ ...args }).save(); }
	},
	updateUser: {
		type: UserType,
		args: {
			userID: { type: GraphQLNonNull(GraphQLID) },
			firstName: { type: GraphQLString },
			lastName: { type: GraphQLString },
			password: { type: GraphQLString },
			dateOfBirth: { type: GraphQLString },
			bags: { type: GraphQLInt },
			active: { type: GraphQLBoolean },
		},
		resolve(parent, args){ return User.findByIdAndUpdate(args.userID, args, updateOptions); }
	},
	removeUser: {
		type: UserType,
		args: {
			userID: { type: GraphQLNonNull(GraphQLID) },
		},
		resolve(parent, args){ return User.findByIdAndRemove(args.userID); }
	},
};
