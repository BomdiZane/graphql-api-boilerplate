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
		password: { type: GraphQLString },
		dateOfBirth: { type: GraphQLString },
		active: { type: GraphQLBoolean },
		startedOn: { type: GraphQLString },
		bags: { type: GraphQLInt },
	})
});
