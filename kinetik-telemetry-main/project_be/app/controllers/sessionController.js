const BaseController = require('./baseController');
const SessionService = require('../services/sessionService');
const SessionValidator = require('../validators/sessionValidator');

class SessionController extends BaseController {
  constructor() {
    super();
  }

  async findFiltered() {
    const filters = this.getValidFilters('Session');

    return SessionService.findFiltered(filters, ['id', 'weather', 'user_id', 'created_at']);
  }

  async findBestLap() {
    let validator = await SessionValidator.validateExists(this.req.params.id);
    if (validator.hasErrors) {
      return validator.errors;
    }

    const bestLap = (await validator.data.session.getLaps()).reduce((prev, curr) => prev.time < curr.time ? prev : curr);

    return {
      lap: bestLap,
      lap_fragments: (await bestLap.getLapFragments()).map(lf => {
        return {
          'velocity': lf.velocity,
          'rpm': lf.rpm,
          'tps': lf.tps,
          'state_of_charge': lf.state_of_charge,
          'temp_for_motor': lf.temp_for_motor,
          'temp_for_controller': lf.temp_for_controller,
          'latitude': lf.latitude,
          'longitude': lf.longitude,
        }
      })
    };
  }

  async create() {
    let validator = await SessionValidator.validateCreate(this.req.body);
    if (validator.hasErrors) {
      return validator.errors;
    }

    return SessionService.create(validator.data);
  }
}

module.exports = new SessionController()