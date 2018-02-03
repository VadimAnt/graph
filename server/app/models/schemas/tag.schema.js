const { DbService } = require('../../services');

module.exports = DbService.createSchema({
	articleId: { type: String },
	name: { type: String },
});
