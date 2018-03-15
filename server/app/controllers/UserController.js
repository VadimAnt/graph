const _ = require('lodash');
const UserModel = require('../models/UserModel');

class UserController {
  constructor() {
    this.users = this.users.bind(this);
    this.create = this.create.bind(this);
    this.edit = this.edit.bind(this);
  }

  async users(root, args) {
    if (_.has(args, 'id')) {
      return await UserModel.findById(args.id);
    }

    const users = await UserModel.find();
    return users;
  }

  async create(root, args) {
    const user = new UserModel({
      email: args.email,
      password: args.password,
      fname: args.fname,
      lname: args.lname,
    });

    await user.save();

    return user;
  }

  async edit(root, args) {
    const user = await UserModel.findById(args.id);
    if (!user) throw Error('Not found user');
    await user.update({
      fname: args.fname || user.fname,
      lname: args.lname || user.lname,
      email: args.email || user.email,
      password: args.password || user.password,
    });
    return user;
  }
}

module.exports = new UserController();
