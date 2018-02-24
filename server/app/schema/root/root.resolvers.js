const UserController = require('../../controllers/UserController');
const ArticleController = require('../../controllers/ArticleController');
const TagController = require('../../controllers/TagController');


module.exports = {
  user: UserController.users,
  users: UserController.users,
  UserCreate: UserController.create,
  UserEdit: UserController.edit,
  ArticleCreate: ArticleController.create,
  TagCreate: TagController.create,
	articles: ArticleController.getAll,
};
