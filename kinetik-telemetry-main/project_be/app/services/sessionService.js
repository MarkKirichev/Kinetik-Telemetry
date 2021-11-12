const SessionRepository = require("../repositories/sessionRepository");
const BaseService = require("./baseService");

class SessionService extends BaseService {
  constructor() {
    super(SessionRepository);
  }
}

module.exports = new SessionService();
