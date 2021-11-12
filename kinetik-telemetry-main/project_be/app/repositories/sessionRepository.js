const db = require("../models/db");
const BaseRepository = require("./baseRepository");

class SessionRepository extends BaseRepository {
  constructor() {
    super(db.Session);
  }
}

module.exports = new SessionRepository();
