const { TagModel } = require('../models');

class TagController {
	constructor() {
		this.tag = TagModel;
		this.read = this.read.bind(this);
		this.create = this.create.bind(this);
	}

	async read(root, args){
		return await this.tag.find({ articleId: root._id });
	}

	async create(root, args){
		const tag = new this.tag({
			articleId: args.articleId,
			name: args.name
		});

		await tag.save();
		return tag;
	}
}

module.exports = new TagController();