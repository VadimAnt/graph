const { ArticleModel } = require('../models');

class ArticleController {

	constructor() {
		this.ArticleModel = ArticleModel;
		this.read = this.read.bind(this);
		this.create = this.create.bind(this);
	}

	async read(root) {
		const articles = await this.ArticleModel.find({ userId: root._id });
		return articles;
	}

	async create(root, args) {
		const article = this.ArticleModel({
			userId: args.userId,
			title: args.title,
			descr: args.descr,
		});

		await article.save();
		return article;
	}
}

module.exports = new ArticleController();
