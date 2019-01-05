const { GraphQLSchema } = require('graphql'),
	RootQuery = require('./queries/rootQuery'),
	RootMutation = require('./mutations/rootMutation');

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation
});
