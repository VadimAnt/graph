const ArticleController = require('../../controllers/ArticleController');

module.exports = {
  articles: ArticleController.read,
};
