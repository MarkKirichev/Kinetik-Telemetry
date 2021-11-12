const moment = require('moment');

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('sessions', [{
      user_id: 1,
      weather: 'clear',
      created_at: moment().add(11, 'minute').format(),
      updated_at: moment().format()
    }, {
      user_id: 1,
      weather: 'clear',
      created_at: moment().add(22, 'minute').format(),
      updated_at: moment().format()
    }, {
      user_id: 1,
      weather: 'clear',
      created_at: moment().add(33, 'minute').format(),
      updated_at: moment().format()
    }, {
      user_id: 2,
      weather: 'clear',
      created_at: moment().add(44, 'minute').format(),
      updated_at: moment().format()
    }, {
      user_id: 3,
      weather: 'clear',
      created_at: moment().add(55, 'minute').format(),
      updated_at: moment().format()
    }, {
      user_id: 3,
      weather: 'hazy',
      created_at: moment().add(66, 'minute').format(),
      updated_at: moment().format()
    }]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('sessions', null, {});
  }
};
