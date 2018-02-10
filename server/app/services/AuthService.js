const provider = require('jsonwebtoken');
const _ = require('lodash');

module.exports = class AuthService {
	constructor() {
		this._provider = provider;
		this.sign = this.sign.bind(this);
		this.verify = this.verify.bind(this);
		this.refresh = this.verify.bind(this);
	}

	sign(data, options = {}) {
		if (!_.hasIn(options, 'expiresIn')) {
			options.expiresIn = process.env.JWT_EXPIRES;
		}

		return this._provider.sign(data, process.env.JWT_SECRET, options);
	}

	async verify(req) {
		const token = AuthService._getToken(req);

		if (_.isNull(token)) {
			throw Error('Not provided token');
		}

		return new Promise((resolve, reject) => {
			this._provider.verify(token, process.env.JWT_SECRET, (err, decodeToken) => {
				if (err || !decodeToken) {
					return reject(err);
				}

				return resolve(decodeToken);
			});
		});

	}

	static _getToken(req) {

		if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
			return req.headers.authorization.split(' ')[1];
		} else if (req.query && req.query.token) {
			return req.query.token;
		}

		return null;
	}

};

