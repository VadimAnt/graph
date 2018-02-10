const DbService = require('../../services/DbService');
const _ = require('lodash');
const ModelName = 'User';

module.exports = class UserRepository {

	static async findById(data) {
		const user = await DbService.models(ModelName).findById(data);
		return user;
	}

	static async findOne(data) {
		const user = await DbService.models(ModelName).findOne(data);
		return user;
	}

	static async findAll(data) {
		const users = await DbService.models(ModelName).find(data);
		return users;
	}

	static async create(data) {
		const user = await new (DbService.models(ModelName))(data).save();
		return user;
	}

	static async update(user) {
		await user.save();
		return user;
	}

};
