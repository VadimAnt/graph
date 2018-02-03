const UserController = require('../../controllers/user.controller');
const ArticleController = require('../../controllers/article.controller');
const TagController = require('../../controllers/tag.controller');

module.exports = {
	user: UserController.users,
	users: UserController.users,
	create: UserController.create ,
	edit: UserController.edit,
	createArticle: ArticleController.create,
	createTag: TagController.create
};
