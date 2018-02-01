const { makeExecutableSchema } = require('graphql-tools');

module.exports = makeExecutableSchema({
	typeDefs: [
		require('./user/user.type'),
		require('./root/root.type'),
		require('./article/article.type'),
		require('./tag/tag.type')
	],

	resolvers: require('./resolvers')
});
