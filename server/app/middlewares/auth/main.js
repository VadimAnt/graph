const { AuthService, UserService } = require('../../services');

const authService = new AuthService();
const userService = new UserService();

module.exports = {

	auth: async (req, res) => {
		try {
			const data = await authService.verify(req);
			if (!await userService.initialise(req, data)) {
				throw Error('User not found');
			}
			return next();
		} catch (err) {
			return next(err);
		}
	},

};