const db = require('../models/db');
const _ = require('lodash');

class BaseController {
  constructor() {
  }

  getValidFilters(model) {
    const modelFilters = db.sequelize.models[model].getModelFilters();

    return _.pick(this.req.query, modelFilters);
  }

  sendWssMessageToAllClients(message) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === this.webSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }

  async execute(method, req, res, wss, webSocket) {
    this.req = req;
    this.res = res;
    this.wss = wss;
    this.webSocket = webSocket;

    return res.send(await this[method]());
  }

  async executeRender(method, req, res, wss, webSocket) {
    this.req = req;
    this.res = res;
    this.wss = wss;
    this.webSocket = webSocket;

    return res.render(...await this[method]());
  }
}

module.exports = BaseController;