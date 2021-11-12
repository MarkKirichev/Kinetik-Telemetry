const BaseValidator = require("./baseValidator");
const LapService = require('../services/lapService');

class LapFragmentValidator extends BaseValidator {
  async validateCreate(data) {
    let validation = new this.validator(data, {
      lap_id: 'required|integer',
      velocity: 'required|integer',
      rpm: 'required|integer|min:0|max:7000',
      tps: 'required|integer|min:0|max:100',
      state_of_charge: 'required|integer|min:0|max:100',
      temp_for_motor: 'required|integer|min:-100|max:200',
      temp_for_controller: 'required|integer|min:-100|max:200',
      latitude: 'required',
      longitude: 'required',
    });
    validation = await this.validate(validation, data);

    if (validation.hasErrors) {
      return validation;
    }

    const lap = await LapService.findOneWhere({
      'id': data.lap_id
    });


    if (!lap) {
      return {
        hasErrors: true,
        errors: {
          errors: {lap_id: ['Invalid value.']}
        }
      };

    }

    return validation;
  }
}

module.exports = new LapFragmentValidator();