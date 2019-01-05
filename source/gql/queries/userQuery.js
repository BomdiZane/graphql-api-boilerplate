const graphql = require('graphql'),
	UserType = require('../types/userType'),
	{
		GraphQLID,
		GraphQLList,
		GraphQLNonNull,
	} = graphql,
	{ User } = require('../../database/models');

module.exports = {
	users: {
		type: new GraphQLList(UserType),
		resolve(parent, args){
			return User.find({ active: true });
		}
	},
	user: {
		type: UserType,
		args: {
			id: { type: GraphQLNonNull(GraphQLID) },
		},
		resolve(parent, args){
			return User.findById(args.id);
		}
	}
};
