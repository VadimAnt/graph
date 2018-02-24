module.exports = `
  UserCreate(
    email: String!
    password: String!
    fname: String!
    lname: String
  ): User
  UserEdit(id: String!, fname: String!): User
  ArticleCreate(userId: String!, title: String!, descr: String!): Article
  TagCreate(articleId: String!, name: String!): Tag
  ProfileCreate(userId: String!, title: String!, balans: String!) : Profile
`;
