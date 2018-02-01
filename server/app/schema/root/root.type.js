const mutation = require('./root.mutations');

module.exports = `
	type Query{
		user(id: Int!, fname: String!): User
		users: [User]
		${mutation}
	}
`;