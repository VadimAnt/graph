const { ArticleRepository } = require('../models/repositories');

class ArticleController {

  constructor() {
    this.repository = new ArticleRepository();
    this.read = this.read.bind(this);
    this.create = this.create.bind(this);
  }

  async read(root) {
    const articles = await this.repository.findById({ query: { userId: root._id } });
    return articles;
  }

  async create(root, args) {
    const article = await this.repository.create({
      query: {
        userId: args.userId,
        title: args.title,
        descr: args.descr,
      },
    });

    return article;
  }
}

module.exports = new ArticleController();
