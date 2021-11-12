const LapRepository = require("../repositories/lapRepository");
const BaseService = require("./baseService");

class LapService extends BaseService {
  constructor() {
    super(LapRepository);
  }
}

module.exports = new LapService();
