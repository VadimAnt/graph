const { DbService } = require('../services');
const UserModel = DbService.createModel('User', require('./schemas/user.schema'));

module.exports = UserModel;
