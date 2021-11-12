const BaseController = require('./baseController');
const LapService = require('../services/lapService');
const LapValidator = require('../validators/lapValidator');

class LapController extends BaseController {
  constructor() {
    super();
  }

  async findFiltered() {
    const filters = this.getValidFilters('Lap');

    return LapService.findFiltered(filters, ['id', 'time', 'session_id', 'created_at']);
  }

  async create() {
    let validator = await LapValidator.validateCreate(this.req.body);
    if (validator.hasErrors) {
      return validator.errors;
    }

    return LapService.create(validator.data);
  }
}

module.exports = new LapController();