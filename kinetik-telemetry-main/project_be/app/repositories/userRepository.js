const db = require("../models/db");
const BaseRepository = require("./baseRepository");

class UserRepository extends BaseRepository {
  constructor() {
    super(db.User);
  }
}

module.exports = new UserRepository();
