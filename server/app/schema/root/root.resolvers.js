const UserController = require('../../controllers/user.controller');
const ArticleController = require('../../controllers/article.controller');
const TagController = require('../../controllers/tag.controller');

module.exports = {
	user: UserController.users,
	users: UserController.users,
	UserCreate: UserController.create,
	UserEdit: UserController.edit,
	ArticleCreate: ArticleController.create,
	TagCreate: TagController.create,
};
