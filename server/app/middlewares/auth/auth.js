const { AuthService, UserService } = require('../../services');

const authService = new AuthService();

module.exports = {

	auth: async (req, res) => {
		try {
			const data = await authService.verify(req);
			const userService = new UserService();
			if (!await userService.initialise(req, data)) {
				throw Error('User not found');
			}
			return next();
		} catch (err) {
			return next(err);
		}
	},

};