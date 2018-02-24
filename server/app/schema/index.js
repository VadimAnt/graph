const { makeExecutableSchema } = require('graphql-tools');

module.exports = makeExecutableSchema({
  typeDefs: [
    require('./user/user.type'),
    require('./root/root.type'),
    require('./article/article.type'),
    require('./tag/tag.type'),
    require('./profile/profile.type'),
  ],

  resolvers: {
    Query: require('./root/root.resolvers'),
    User: require('./user/user.resolvers'),
    Article: require('./article/article.resolvers'),
    Profile: require('./profile/profile.resolvers')
  },
});
