const { ArticleController } = require('../../controllers');

module.exports = {
	articles: ArticleController.read,
};
