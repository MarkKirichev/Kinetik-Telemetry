const moment = require('moment');
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('users', [{
      email: 'test@test.test',
      password: await bcrypt.hash('test_password', 10),
      created_at: moment().format(),
      updated_at: moment().format()
    },{
      email: 'racer1@test.test',
      password: await bcrypt.hash('test_password', 10),
      created_at: moment().format(),
      updated_at: moment().format()
    },{
      email: 'racer2@test.test',
      password: await bcrypt.hash('test_password', 10),
      created_at: moment().format(),
      updated_at: moment().format()
    }]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
