const _ = require('lodash');
const { UserModel } = require('../models');

class UserController {
	constructor(){
		this.user = UserModel;

		this.users = this.users.bind(this);
		this.create = this.create.bind(this);
		this.edit = this.edit.bind(this);
	}

	async users(root, args){
		if(_.has(args, 'id')) {
			return this.user.findById(args.id);
		}

		return UserModel.find();
	}

	async create(root, args){
		let user = this.user({
			fname: args.fname,
			lname: args.lname
		});
		await user.save();

		return user;
	}

	async edit(root, args){
		let user = this.user.findById(args.id);
		user.fname = args.fname;
		await user.update();
		return user;
	}

};

module.exports = new UserController();