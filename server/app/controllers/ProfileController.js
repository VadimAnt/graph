const { ProfileRepository } = require('../models/repositories');

class ArticleController {

  constructor() {
    this.repository = new ProfileRepository();
    this.create = this.create.bind(this);
  }

	async read(root) {
		const profile = await this.repository.findById({ query: { userId: root._id } });
		return profile;
	}

  async create(root, args) {
  	console.log(args);
    const profile = await this.repository.create({
      query: {
        userId: args.userId,
        title: args.title,
        balans: args.balans,
      },
    });

    return profile;
  }
}

module.exports = new ArticleController();
