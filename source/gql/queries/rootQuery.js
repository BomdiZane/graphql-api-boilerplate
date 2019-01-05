const graphql = require('graphql'),
	{ GraphQLObjectType } = graphql,
	UserQuery = require('./userQuery');

module.exports = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		...UserQuery,
	}
});
