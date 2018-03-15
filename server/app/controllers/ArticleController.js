const ArticleModel = require('../models/ArticleModel');

class ArticleController {

  constructor() {
    this.read = this.read.bind(this);
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async read(root) {
    const articles = await ArticleModel.find({ userId: root._id });
    return articles;
  }

  async getAll() {
	  const articles = await ArticleModel.find();
	  return articles;
  }

  async create(root, args) {
    const article = new ArticleModel({
      userId: args.userId,
      title: args.title,
      descr: args.descr,
    });

    await article.save();

    return article;
  }
}

module.exports = new ArticleController();
