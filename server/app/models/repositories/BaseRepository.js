const models = require('../../models');
const DbService = require('../../services/DbService');

module.exports = class BaseRepository {

  constructor(modelName) {
    this.modelName = modelName;
    this.models = models;
  }

  async findById(id) {
    const entity = await DbService.models(this.modelName).findById(id);
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

  static _prepareData(params = {}) {
    params.options = params.options ? params.options : {};
    params.query = params.query || {};
    params.newData = params.query || {};
    params.lean = !!(params.options && params.options.lean);
    params.select = params.options.select || '';

    return params;
  }

};
