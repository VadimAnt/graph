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

    const users = await this.repository.findAll();
    console.log(users);
    return await this.repository.findAll();
  }

  async create(root, args) {
    const user = await this.repository.create({ query:{
      email: args.email || user.email,
      password: args.password || user.password,
      fname: args.fname || user.fname,
      lname: args.lname || user.lname,
    }});

    return user;
  }

  async edit(root, args) {
    try {

      const user = await this.repository.findById(args.id);
      if (!user) throw Error('Not found user');
      await user.update({
	      fname: args.fname || user.fname,
        lname: args.lname || user.lname,
        email: args.email || user.email,
        password: args.password || user.password,
      });
      return user;

    } catch (err) {
      return err;
    }
  }
}

module.exports = new UserController();
