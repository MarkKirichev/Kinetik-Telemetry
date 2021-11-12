const BaseValidator = require("./baseValidator");
const UserService = require('../services/userService');
const SessionService = require('../services/sessionService');

class SessionValidator extends BaseValidator {
  async validateExists(id) {
    const session = await SessionService.findOneWhere({id});

    if (!session) {
      return {
        hasErrors: true,
        errors: {
          errors: {id: ['Invalid value.']}
        }
      };
    }

    return {data: {session}, hasErrors: false};
  }

  async validateCreate(data) {
    let validation = new this.validator(data, {
      user_id: 'required|integer',
      weather: 'string'
    });
    validation = await this.validate(validation, data);

    if (validation.hasErrors) {
      return validation;
    }

    const user = await UserService.findOneWhere({
      'id': data.user_id
    });


    if (!user) {
      return {
        hasErrors: true,
        errors: {
          errors: {user_id: ['Invalid value.']}
        }
      };

    }

    return validation;
  }
}

module.exports = new SessionValidator();