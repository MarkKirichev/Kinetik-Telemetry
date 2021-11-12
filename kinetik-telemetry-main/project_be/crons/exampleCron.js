const dotenv = require('dotenv');
dotenv.config({path: __dirname + '/../.env'});
const request = require('request');
const UtilsHelper = require('../app/helpers/utilsHelper');
const fs = require('fs');

class ExampleCron {
  index = 0;

  async execute() {
    let coords = JSON.parse(fs.readFileSync(__dirname + '/../app/public/data.json'))['data'];
    let nTimes = 20;
    let sleepMs = 48;

    for(let i=0; i<nTimes; i++) {
      request({
        url: "http://localhost:3000/api/lap-fragments",
        method: "POST",
        json: true,
        body: {
          "velocity": UtilsHelper.getRandomInt(1, 10),
          "rpm": UtilsHelper.getRandomInt(3000, 6000),
          "tps": UtilsHelper.getRandomInt(40, 99),
          "state_of_charge": UtilsHelper.getRandomInt(50, 99),
          "temp_for_motor": UtilsHelper.getRandomInt(20, 50),
          "temp_for_controller": UtilsHelper.getRandomInt(40, 60),
          "latitude": coords[this.index].lat,
          "longitude": coords[this.index].lng,
          "lap_id": 14
        }
      }, (error, response, body) => {
        // handle error/response/body
      });


      this.index = this.index >= coords.length - 1 ? 0 : this.index + 1;
      await UtilsHelper.sleep(sleepMs);
    }
  }
}

// (new ExampleCron()).execute();

module.exports = new ExampleCron();