const { DbService } = require('../../services');

module.exports = DbService.createSchema({
	fname: { type: String },
	lname: { type: String }
});