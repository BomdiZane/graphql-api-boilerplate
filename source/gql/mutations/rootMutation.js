const { GraphQLObjectType } = require('graphql'),
	UserMutation = require('./userMutation');

module.exports = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		...UserMutation,
	}
});
