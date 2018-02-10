const DbService = require('../../services/DbService');
const ModelName = 'User';

module.exports = class UserRepository {

	static async findById(UserId) {
		const user = await DbService.models(ModelName).findById(UserId);
		return user;
	}

	static async findOne(data) {
		const user = await DbService.models(ModelName).findOne(data);
		return user;
	}

	

};
