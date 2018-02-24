const mutation = require('./root.mutations');

module.exports = `
  type Query{
    user(id: String!): User
    profile(id: String!) : Profile
    users: [User]
    articles: [Article]
    ${mutation}
  }
`;
