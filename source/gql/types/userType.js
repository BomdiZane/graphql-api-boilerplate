const {
		GraphQLObjectType,
		GraphQLString,
		GraphQLID,
		GraphQLInt,
		GraphQLBoolean,
	} = require('graphql');

module.exports = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: { type: GraphQLID },
		firstName: { type: GraphQLString },
		lastName: { type: GraphQLString },
		email: { type: GraphQLString },
		password: { type: GraphQLString },
		userName: { type: GraphQLString },
		dateOfBirth: { type: GraphQLString },
		gender: { type: GraphQLString },
		active: { type: GraphQLBoolean },
		startedOn: { type: GraphQLString },
		bags: { type: GraphQLInt },
	})
});
