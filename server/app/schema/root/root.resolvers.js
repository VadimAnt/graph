const { UserController, ArticleController, TagController } = require('../../controllers');

module.exports = {
  user: UserController.users,
  users: UserController.users,
  UserCreate: UserController.create,
  UserEdit: UserController.edit,
  ArticleCreate: ArticleController.create,
  TagCreate: TagController.create,
};
