const Repository = require('./BaseRepository');

module.exports = class ArticleRepository extends Repository {
	constructor() {
		super('Article');
	}
};
