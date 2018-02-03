const UserController = require('../../controllers/user.controller');

module.exports = {
	user: UserController.users,
	users: UserController.users,
	create: UserController.create ,
	edit: UserController.edit,
};