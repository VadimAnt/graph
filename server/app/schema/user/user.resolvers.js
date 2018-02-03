const ArticleController = require('../../controllers/article.controller');

module.exports = {
	articles: ArticleController.read,
};
