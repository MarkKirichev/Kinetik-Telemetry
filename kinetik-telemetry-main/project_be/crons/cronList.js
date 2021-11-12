const cron = require('node-cron');
const ExampleCron = require('./exampleCron');
const db = require('../app/models/db');

class CronList {
  constructor() {
    this.init();
  }

  async init() {
    if (!this.isCronEnabled()) {
      return null;
    }

    cron.schedule('*/1 * * * * *', () => {
      // ExampleCron.execute();
    });

    cron.schedule('*/10 * * * *', () => {
      // db.sequelize.query('DELETE FROM lap_fragments WHERE id > 1470;');
    });
  }

  isCronEnabled() {
    return process.env.CRON_ENABLED == 'true';
  }
}

module.exports = new CronList();