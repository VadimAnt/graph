module.exports = `
	create(
		id: Int!
		fname: String!
		lname: String
	): User
	edit(id: Int!, fname: String!): User
	createArticle(userId: String!, title: String!, descr: String!): Article
	createTag(articleId: String!, name: String!): Tag
`;