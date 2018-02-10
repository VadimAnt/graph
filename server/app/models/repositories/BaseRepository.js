const DbService = require('../../services/DbService');
const _ = require('lodash');

module.exports = class BaseRepository {

	constructor(modelName) {
		this.modelName = modelName;
	}

	async findById(params) {
		const { query, select, lean } = BaseRepository._prepareData(params);

		const entity = await DbService.models(this.modelName).findById(query).select(select).lean(lean);
		if (!entity) return null;
		return entity;
	}

	async findOne(params) {
		const { query, select, lean } = BaseRepository._prepareData(params);

		const entity = await DbService.models(this.modelName).findOne(query).select(select).lean(lean);
		return entity;
	}

	async findAll(params) {
		const { query, select, lean } = BaseRepository._prepareData(params);

		const entities = await DbService.models(this.modelName).find(query).select(select).lean(lean);
		return entities;
	}

	async create(params) {
		const { query } = BaseRepository._prepareData(params);

		const entity = await new (DbService.models(this.modelName))(query).save();
		return entity;
	}

	async findByOneAndUpdate(params) {
		const { query, newData } = BaseRepository._prepareData(params);

		const entity = await DbService.models(this.modelName).findOneAndUpdate(query, newData);
		return entity;
	}

	async deleteOne(params) {
		const { query } = BaseRepository._prepareData(params);

		const entity = await DbService.models(this.modelName).deleteOne(query);
		return entity;
	}

	async deleteMany(params) {
		const { query } = BaseRepository._prepareData(params);

		const entities = await DbService.models(this.modelName).deleteMany(query);
		return entities;
	}

	get model() {
		return DbService.models(this.modelName);
	}

	static _prepareData(params = {}) {
		params.options = params.options ? params.options : {};
		params.query = params.query || {};
		params.newData = params.query || {};
		params.lean = !!(params.options && params.options.lean);
		params.select = params.options.select || '';

		return params;
	}

};
