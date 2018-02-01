module.exports = `
	type Query{
		user(id: Int!, fname: String!): User
		users: [User]
	}
`;