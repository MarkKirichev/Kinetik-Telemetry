const Validator = require('validatorjs');
const db = require('../models/db');

class BaseValidator {
  constructor() {
    this.validator = Validator;

    this.validator.registerAsync('unique', async function (value, requirement, attribute, passes) {
      let where = {};
      where[attribute] = value;

      let obj = await db[requirement].findOne({where});
      if (!obj) {
        return passes(true);
      } else {
        return passes(false, `The ${attribute} is already used.`);
      }
    });
  }

  async validate(validation, data) {
    return new Promise(resolve => {
      validation.checkAsync(() => {
        resolve(Object.assign({data}, {hasErrors: false}));
      }, () => {
        resolve(Object.assign({errors: validation.errors}, {hasErrors: true}));
      })
    });
  }
}

module.exports = BaseValidator;