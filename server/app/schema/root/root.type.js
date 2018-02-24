const mutation = require('./root.mutations');

module.exports = `
  type Query{
    user(id: String!): User
    users: [User]
    articles: [Article]
    ${mutation}
  }
`;
