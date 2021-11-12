const BaseController = require('./baseController');
const LapFragmentService = require('../services/lapFragmentService');
const LapFragmentValidator = require('../validators/lapFragmentValidator');

class LapFragmentController extends BaseController {
  constructor() {
    super();
  }

  async findFiltered() {
    const filters = this.getValidFilters('LapFragment');

    if (!filters.lap_id) {
      return {
        "errors": {
          "lap_id": [
            "The lap_id GET filter is required."
          ]
        }
      };
    }

    let lapFragments = await LapFragmentService.findFiltered(filters, [
      'id', 'velocity', 'rpm', 'tps', 'state_of_charge',
      'temp_for_motor', 'temp_for_controller', 'latitude', 'longitude',
    ]);

    if (this.req.query.start_id) {
      lapFragments = lapFragments.filter(lp => lp.id >= this.req.query.start_id);
    }

    if (this.req.query.end_id) {
      lapFragments = lapFragments.filter(lp => lp.id <= this.req.query.end_id);
    }

    return lapFragments;
  }

  async create() {
    let validator = await LapFragmentValidator.validateCreate(this.req.body);
    if (validator.hasErrors) {
      return validator.errors;
    }

    let lapFragment = await LapFragmentService.create(validator.data);

    this.sendWssMessageToAllClients(validator.data);

    return lapFragment;
  }
}

module.exports = new LapFragmentController();