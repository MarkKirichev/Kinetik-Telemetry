const BaseValidator = require("./baseValidator");
const SessionService = require('../services/sessionService');

class LapValidator extends BaseValidator {
  async validateCreate(data) {
    let validation = new this.validator(data, {
      session_id: 'required|integer',
      time: 'numeric',
    });
    validation = await this.validate(validation, data);

    if (validation.hasErrors) {
      return validation;
    }

    const user = await SessionService.findOneWhere({
      'id': data.session_id
    });


    if (!user) {
      return {
        hasErrors: true,
        errors: {
          errors: {session_id: ['Invalid value.']}
        }
      };

    }

    return validation;
  }
}

module.exports = new LapValidator();