const { AuthService } = require('../../services');
const UserRepository = require('../../models/repositories/UserRepository');

const authService = new AuthService();

module.exports = {

	auth: async (req, res, next) => {
		try {
			const data = await authService.verify(req);
			if (!await UserRepository.setUser(req, data)) {
				throw Error('User not found');
			}
			return next();
		} catch (err) {
			return next(err);
		}
	},

};
