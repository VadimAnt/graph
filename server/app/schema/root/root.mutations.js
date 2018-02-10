module.exports = `
	UserCreate(
		email: String!
		password: String!
		fname: String!
		lname: String
	): User
	UserEdit(id: Int!, fname: String!): User
	ArticleCreate(userId: String!, title: String!, descr: String!): Article
	TagCreate(articleId: String!, name: String!): Tag
`;
