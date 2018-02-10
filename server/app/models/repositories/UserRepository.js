const Repository = require('./BaseRepository');

module.exports = class UserRepository extends Repository {
  constructor() {
    super('User');
  }
};
