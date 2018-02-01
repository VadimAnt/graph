module.exports = `
	addUser(
		id: Int!
		fname: String!
		lname: String
	): User
	editfname(id: Int!, fname: String!): User
`;