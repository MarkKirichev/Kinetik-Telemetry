const LapFragmentRepository = require("../repositories/lapFragmentRepository");
const BaseService = require("./baseService");

class LapFragmentService extends BaseService {
  constructor() {
    super(LapFragmentRepository);
  }
}

module.exports = new LapFragmentService();
