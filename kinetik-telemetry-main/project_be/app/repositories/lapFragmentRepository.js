const db = require("../models/db");
const BaseRepository = require("./baseRepository");

class LapFragmentRepository extends BaseRepository {
  constructor() {
    super(db.LapFragment);
  }
}

module.exports = new LapFragmentRepository();
