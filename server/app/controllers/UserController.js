const _ = require('lodash');
const UserRepository  = require('../models/repositories/UserRepository');

class UserController {
  constructor() {
    this.repository = new UserRepository();

    this.users = this.users.bind(this);
    this.create = this.create.bind(this);
    this.edit = this.edit.bind(this);
  }

  async users(root, args) {
    if (_.has(args, 'id')) {
      return await this.repository.findById(args.id);
    }

    return await this.repository.findAll();
  }

  async create(root, args) {
    const user = await this.repository.create({ query:{
      email: args.email,
      password: args.password,
      fname: args.fname,
      lname: args.lname,
    }});

    return user;
  }

  async edit(root, args) {
    try {

      const user = await this.repository.findById(args.id);
      if (!user) throw Error('Not found user');
      await user.update({
	      fname: args.fname,
        lname: args.lname,
        email: args.email
      });
      return user;

    } catch (err) {
      return err;
    }
  }
}

module.exports = new UserController();
