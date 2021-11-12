const {Op} = require("sequelize");
const db = require("../models/db");

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  findFiltered(filters = {}, attributes = null, order = []) {
    return this.model.findAll({
      where: filters,
      attributes,
      order
    });
  }

  findAll(order = []) {
    return this.model.findAll({
      order: order
    });
  }

  findAllWithAttributes(attributes, order = []) {
    return this.model.findAll({
      attributes,
      order: order
    });
  }

  findWhere(where, attributes = null) {
    return this.model.findAll({
      attributes,
      where
    });
  }

  findOneWhere(where) {
    return this.model.findOne({
      where
    });
  }

  create(data) {
    return this.model.create(data);
  }

  update(object, data) {
    return object.update(data);
  }

  delete(object) {
    return object.destroy();
  }
}

module.exports = BaseRepository;