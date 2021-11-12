const moment = require('moment');
const UtilsHelper = require('../app/helpers/utilsHelper');

module.exports = {
  up: async (queryInterface) => {
    let data = [];

    for (let i = 1; i <= 13; i=i+2) {
      data = [...data, ...[{
        lap_id: i,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 99,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.2338491288195',
        longitude: '27.964899748340617',
        created_at: moment().add(i*i+1, 'second').format(),
        updated_at: moment().format()
      }, {
      //   lap_id: i,
      //   velocity: UtilsHelper.getRandomInt(40, 90),
      //   rpm: UtilsHelper.getRandomInt(2000, 6000),
      //   tps: UtilsHelper.getRandomInt(40, 99),
      //   state_of_charge: 98,
      //   temp_for_motor: UtilsHelper.getRandomInt(30, 50),
      //   temp_for_controller: UtilsHelper.getRandomInt(40, 60),
      //   latitude: '43.233327166204525',
      //   longitude: '27.965208425478185',
      //   created_at: moment().add(i*i+2, 'second').format(),
      //   updated_at: moment().format()
      // }, {
        lap_id: i,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 97,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.2337084498348',
        longitude: '27.96532544046145',
        created_at: moment().add(i*i+3, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 96,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23425028036897',
        longitude: '27.965002470882247',
        created_at: moment().add(i*i+4, 'second').format(),
        updated_at: moment().format()
      }, {
      //   lap_id: i,
      //   velocity: UtilsHelper.getRandomInt(40, 90),
      //   rpm: UtilsHelper.getRandomInt(2000, 6000),
      //   tps: UtilsHelper.getRandomInt(40, 99),
      //   state_of_charge: 95,
      //   temp_for_motor: UtilsHelper.getRandomInt(30, 50),
      //   temp_for_controller: UtilsHelper.getRandomInt(40, 60),
      //   latitude: '43.23413696363596',
      //   longitude: '27.965530016690767',
      //   created_at: moment().add(i*i+5, 'second').format(),
      //   updated_at: moment().format()
      // }, {
        lap_id: i,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 94,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23358411812668',
        longitude: '27.965543424732243',
        created_at: moment().add(i*i+6, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 93,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23332331784405',
        longitude: '27.966248693333842',
        created_at: moment().add(i*i+7, 'second').format(),
        updated_at: moment().format()
      }, {
      //   lap_id: i,
      //   velocity: UtilsHelper.getRandomInt(40, 90),
      //   rpm: UtilsHelper.getRandomInt(2000, 6000),
      //   tps: UtilsHelper.getRandomInt(40, 99),
      //   state_of_charge: 92,
      //   temp_for_motor: UtilsHelper.getRandomInt(30, 50),
      //   temp_for_controller: UtilsHelper.getRandomInt(40, 60),
      //   latitude: '43.233791830620184',
      //   longitude: '27.965771097097242',
      //   created_at: moment().add(i*i+8, 'second').format(),
      //   updated_at: moment().format()
      // }, {
        lap_id: i,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 91,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23424691441105',
        longitude: '27.965627284161684',
        created_at: moment().add(i*i+9, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 90,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23423299853697',
        longitude: '27.966123712682016',
        created_at: moment().add(i*i+10, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 89,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23359793355423',
        longitude: '27.966195945394027',
        created_at: moment().add(i*i+11, 'second').format(),
        updated_at: moment().format()
      }, {
      //   lap_id: i,
      //   velocity: UtilsHelper.getRandomInt(40, 90),
      //   rpm: UtilsHelper.getRandomInt(2000, 6000),
      //   tps: UtilsHelper.getRandomInt(40, 99),
      //   state_of_charge: 87,
      //   temp_for_motor: UtilsHelper.getRandomInt(30, 50),
      //   temp_for_controller: UtilsHelper.getRandomInt(40, 60),
      //   latitude: '43.23419413739477',
      //   longitude: '27.966469934752826',
      //   created_at: moment().add(i*i+12, 'second').format(),
      //   updated_at: moment().format()
      // }, {
        lap_id: i,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 86,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.234564855484294',
        longitude: '27.96572516513729',
        created_at: moment().add(i*i+13, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 84,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23419018360043',
        longitude: '27.96479389895747',
        created_at: moment().add(i*i+14, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i + 1,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 78,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.2338491288195',
        longitude: '27.964899748340617',
        created_at: moment().add(i*i+21, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i + 1,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 77,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.233835449689884',
        longitude: '27.96490377165414',
        created_at: moment().add(i*i+22, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i + 1,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 76,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23381493098968',
        longitude: '27.964910477176677',
        created_at: moment().add(i*i+23, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i + 1,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 75,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.233799297689686',
        longitude: '27.964917182699214',
        created_at: moment().add(i*i+24, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i + 1,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 74,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23377877897732',
        longitude: '27.964922547117244',
        created_at: moment().add(i*i+25, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i + 1,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 73,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23376021442207',
        longitude: '27.964931934848796',
        created_at: moment().add(i*i+26, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i + 1,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 72,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.233749533367416',
        longitude: '27.96493662871457',
        created_at: moment().add(i*i+27, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i + 1,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 71,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.233731945885744',
        longitude: '27.964941322580348',
        created_at: moment().add(i*i+28, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i + 1,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 70,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23371680110579',
        longitude: '27.964946686998378',
        created_at: moment().add(i*i+29, 'second').format(),
        updated_at: moment().format()
      }, {
        lap_id: i + 1,
        velocity: UtilsHelper.getRandomInt(40, 90),
        rpm: UtilsHelper.getRandomInt(2000, 6000),
        tps: UtilsHelper.getRandomInt(40, 99),
        state_of_charge: 69,
        temp_for_motor: UtilsHelper.getRandomInt(30, 50),
        temp_for_controller: UtilsHelper.getRandomInt(40, 60),
        latitude: '43.23369970215615',
        longitude: '27.96495607472993',
        created_at: moment().add(i*i+30, 'second').format(),
        updated_at: moment().format()
      }
      ]];
    }
    data.splice(-10);

    return queryInterface.bulkInsert('lap_fragments', [...data, ...require('./lap_data.json'), ...require('./lap_data_real.json')]);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('lap_fragments', null, {});
  }
};
