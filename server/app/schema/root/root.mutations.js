module.exports = `
	create(
		id: Int!
		fname: String!
		lname: String
	): User
	edit(id: Int!, fname: String!): User
`;