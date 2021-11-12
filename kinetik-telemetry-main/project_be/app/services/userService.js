const UserRepository = require("../repositories/userRepository");
const BaseService = require("./baseService");

class UserService extends BaseService {
  constructor() {
    super(UserRepository);
  }
}

module.exports = new UserService();
