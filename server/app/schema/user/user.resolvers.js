const ArticleController = require('../../controllers/ArticleController');
const ProfileController = require('../../controllers/ProfileController');

module.exports = {
  articles: ArticleController.read,
	profile: ProfileController.read
};
