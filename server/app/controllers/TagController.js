const TagModel = require('../models/TagModel');

class TagController {
  constructor() {
    this.read = this.read.bind(this);
    this.create = this.create.bind(this);
  }

  async read(root) {
    const tag = await TagModel.find({ articleId: root._id });
    return tag;
  }

  async create(root, args) {
    const tag = await TagModel({
      articleId: args.articleId,
      name: args.name,
    });

    await tag.save();

    return tag;
  }
}

module.exports = new TagController();
