const ProfileModel = require('../models/ProfileModel');

class ProfileConstroller {

  constructor() {
    this.create = this.create.bind(this);
    this.read = this.read.bind(this);
  }

	async read(root) {
		const profile = await ProfileModel.findOne({ userId: root._id });
		return profile;
	}

  async create(root, args) {
  	console.log(args);
    const profile = new ProfileModel({
      userId: args.userId,
      title: args.title,
      balans: args.balans,
    });

    profile.save();

    return profile;
  }
}

module.exports = new ProfileConstroller();
