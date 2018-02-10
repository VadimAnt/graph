module.exports = `
	type User{
		id: ID!
		email: String!
		fname: String!
		lname: String!
		descr: String
		articles: [Article]
	}
`;
