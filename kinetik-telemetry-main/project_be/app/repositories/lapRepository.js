const db = require("../models/db");
const BaseRepository = require("./baseRepository");

class LapRepository extends BaseRepository {
  constructor() {
    super(db.Lap);
  }
}

module.exports = new LapRepository();
