module.exports = `
  type Article{
    id: ID!
    userId: String!
    title: String!
    descr: String!
    tags: [Tag]
  }
`;
