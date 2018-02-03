const provider = require('mongoose');

module.exports = class DbService {
	constructor() {
		this.dsn = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
		this._provider = provider;
		this._provider.Promise = global.Promise;
	}

	static getSchemaTypes() {
		return provider.Schema.Types;
	}

	static createSchema(schemaData, options) {
		return new provider.Schema(schemaData, options);
	}

	static createModel(modelName, schema) {
		provider.Promise = global.Promise;
		return provider.model(modelName, schema);
	}

	static models(modelName) {
		if (modelName) {
			return provider.models[modelName];
		}
		return provider.models;
	}

	static dropDatabase() {
		return provider.connection.dropDatabase();
	}

	async connect() {
		await this._provider.connect(this.dsn);
		return this.connection;
	}

};

