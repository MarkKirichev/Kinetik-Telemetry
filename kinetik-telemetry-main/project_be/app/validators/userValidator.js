const BaseValidator = require("./baseValidator");
const UserService = require('../services/userService');

class UserValidator extends BaseValidator {
  async validateExists(id) {
    const user = await UserService.findOneWhere({id});

    if (!user) {
      return {
        hasErrors: true,
        errors: {
          errors: {id: ['Invalid value.']}
        }
      };
    }

    return {data: {user}, hasErrors: false};
  }

  async validateCreate(data) {
    let validation = new this.validator(data, {
      email: 'required|email',
      password: 'required'
    });
    validation = await this.validate(validation, data);

    if (validation.hasErrors) {
      return validation;
    }

    const user = await UserService.findOneWhere({
      'email': data.email
    });


    if (user) {
      return {
        hasErrors: true,
        errors: {
          errors: {email: ['Email is already used.']}
        }
      };

    }

    return validation;
  }
}

module.exports = new UserValidator();