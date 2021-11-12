const BaseController = require('./baseController');
const UserService = require('../services/userService');
const UserValidator = require('../validators/userValidator');

class UserController extends BaseController {
  constructor() {
    super();
  }

  async findFiltered() {
    const filters = this.getValidFilters('User');

    return UserService.findFiltered(filters, ['id', 'email']);
  }

  async create() {
    let validator = await UserValidator.validateCreate(this.req.body);
    if (validator.hasErrors) {
      return validator.errors;
    }

    return UserService.create(validator.data);
  }
}

module.exports = new UserController();