const Repository = require('./BaseRepository');

module.exports = class TagRepository extends Repository {
  constructor() {
    super('Tag');
  }
};
