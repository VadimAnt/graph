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
      return this.repository.findById({ query: args.id });
    }

    return this.repository.findAll();
  }

  async create(root, args) {

    const user = this.repository.create({
      email: args.email,
      password: args.password,
      fname: args.fname,
      lname: args.lname,
    });

    return user;
  }

  async edit(root, args) {
    try {

      const user = await this.repository.findById(args.id);
      if (!user) throw Error('Not found user');
      user.fname = args.fname;
      await this.repository.update(user);
      return user;

    } catch (err) {
      return err;
    }
  }
}

module.exports = new UserController();
