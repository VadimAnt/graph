const UserController = require('../../controllers/UserController');
const ArticleController = require('../../controllers/ArticleController');
const TagController = require('../../controllers/TagController');
const ProfileController = require('../../controllers/ProfileController');

module.exports = {
  user: UserController.users,
  users: UserController.users,
  UserCreate: UserController.create,
  UserEdit: UserController.edit,
  ArticleCreate: ArticleController.create,
  ProfileCreate: ProfileController.create,
  TagCreate: TagController.create,
	articles: ArticleController.getAll,
};
