const { DbService } = require('../../services');

module.exports = DbService.createSchema({
	userId: { type: String },
	title: { type: String },
	descr: { type: String }
});