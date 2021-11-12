class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  findFiltered(filters = {}, attributes = null, order = []) {
    return this.repository.findFiltered(filters, attributes, order);
  }

  findAll(order = []) {
    return this.repository.findAll(order);
  }

  findAllWithAttributes(attributes, order = []) {
    return this.repository.findAllWithAttributes(attributes, order);
  }

  findWhere(where, attributes = null) {
    return this.repository.findWhere(where, attributes);
  }

  findOneWhere(where) {
    return this.repository.findOneWhere(where);
  }

  create(data) {
    return this.repository.create(data);
  }

  update(object, data) {
    return this.repository.update(object, data);
  }

  async upsert(values, where) {
    const foundItem = await this.repository.findOneWhere(where);
    if (!foundItem) {
      return this.repository.create(values);
    }

    return this.repository.update(foundItem, values);
  }

  delete(object) {
    return this.repository.delete(object);
  }
}

module.exports = BaseService;