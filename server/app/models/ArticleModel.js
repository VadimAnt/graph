const { DbService } = require('../services');
const ArticleModel = DbService.createModel('Article', require('./schemas/article.schema'));

module.exports = ArticleModel;
