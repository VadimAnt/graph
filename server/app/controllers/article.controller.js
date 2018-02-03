const { ArticleModel } = require('../models');

class ArticleController{

	constructor() {
		this.article = ArticleModel;
		this.read = this.read.bind(this);
		this.create = this.create.bind(this);
	}

	async read(root, args){
		return await this.article.find({ userId: root._id });;
	}

	async create(root, args){
		const article = this.article({
			userId: args.userId,
			title: args.title,
			descr: args.descr
		});

		await article.save();
		return article;
	}
}

module.exports = new ArticleController();