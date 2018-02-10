const { TagModel } = require('../models');

class TagController {
	constructor() {
		this.TagModel = TagModel;
		this.read = this.read.bind(this);
		this.create = this.create.bind(this);
	}

	async read(root) {
		const tag = await this.TagModel.find({ articleId: root._id });
		return tag;
	}

	async create(root, args) {
		const tag = new this.TagModel({
			articleId: args.articleId,
			name: args.name,
		});

		await tag.save();
		return tag;
	}
}

module.exports = TagController;
