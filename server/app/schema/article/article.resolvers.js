const TagController = require('../../controllers/tag.controller');

module.exports = {
	tags: TagController.read,
};
