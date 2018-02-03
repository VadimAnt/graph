const mutation = require('./root.mutations');

module.exports = `
	type Query{
		user(id: Int!): User
		users: [User]
		${mutation}
	}
`;
