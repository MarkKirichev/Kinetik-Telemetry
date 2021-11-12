const moment = require('moment');

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('laps', [{
      session_id: 1,
      time: 67.395,
      created_at: moment().add(1, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 1,
      time: 66.074,
      created_at: moment().add(6, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 1,
      time: 68.251,
      created_at: moment().add(12, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 2,
      time: 68.073,
      created_at: moment().add(18, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 2,
      time: 68.982,
      created_at: moment().add(24, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 3,
      time: 67.891,
      created_at: moment().add(30, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 3,
      time: 69.742,
      created_at: moment().add(36, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 4,
      time: 68.456,
      created_at: moment().add(42, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 5,
      time: 68.871,
      created_at: moment().add(48, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 5,
      time: 67.002,
      created_at: moment().add(54, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 6,
      time: 69.011,
      created_at: moment().add(60, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 6,
      time: 68.353,
      created_at: moment().add(66, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 6,
      time: 67.801,
      created_at: moment().add(72, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 6,
      time: 68.123,
      created_at: moment().add(78, 'minute').format(),
      updated_at: moment().format()
    }, {
      session_id: 6,
      time: 67.888,
      created_at: moment().add(84, 'minute').format(),
      updated_at: moment().format()
    }]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('laps', null, {});
  }
};
