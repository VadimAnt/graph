const Repository = require('./BaseRepository');

module.exports = class ProfileRepository extends Repository {
	constructor() {
		super('Profile');
	}
};
