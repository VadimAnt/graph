const DbService = require('./DbService');

module.exports = class UserService {
	constructor() {
		this.userModel = DbService.models('User');
	}

	async initialise(req, data) {
		const user = await this.userModel.findById(data.id);
		if (user) {
			req.user = user;
			return true;
		}

		return false;
	}

};

