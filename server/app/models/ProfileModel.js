const { DbService } = require('../services');
const ProfileModel = DbService.createModel('Profile', require('./schemas/profile.schema'));

module.exports = ProfileModel;
