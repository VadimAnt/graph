const { TagRepository } = require('../models/repositories');

class TagController {
  constructor() {
    this.repository = new TagRepository();
    this.read = this.read.bind(this);
    this.create = this.create.bind(this);
  }

  async read(root) {
    const tag = await this.repository.findById({ query: { article: root._id } });
    return tag;
  }

  async create(root, args) {
    const tag = await this.repository.create({
      query: {
        articleId: args.articleId,
        name: args.name,
      },
    });

    return tag;
  }
}

module.exports = new TagController();
