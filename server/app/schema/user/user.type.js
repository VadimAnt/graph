module.exports = `
	type User{
		id: ID!
		email: String!
		fname: String!
		lname: String!
		descr: String
		prodile: Profile
		articles: [Article]
	}
`;
