const { AuthService } = require('../../services');
const UserRepository = require('../../models/repositories/UserRepository');

const authService = new AuthService();

module.exports = {

  auth: async (req, res, next) => {
    try {
      const data = await authService.verify(req);
      const user = await UserRepository.findById(data.id);
      if (!user) {
        throw Error('User not found');
      }

      req.user = user;

      return next();
    } catch (err) {
      return next(err);
    }
  },

};
