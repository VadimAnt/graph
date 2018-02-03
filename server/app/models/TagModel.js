const { DbService } = require('../services');
const TagModel = DbService.createModel('Tag', require('./schemas/tag.schema') );

module.exports = TagModel;