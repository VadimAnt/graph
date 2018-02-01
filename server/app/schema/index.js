const { makeExecutableSchema } = require('graphql-tools');

const UsersSchema = require('./users/users.type');
const RootSchema = require('./root/root.type');

const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
	typeDefs: [
		RootSchema,
		UsersSchema
	],

	resolvers
});

module.exports = schema;