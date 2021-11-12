const passport = require('passport');

class AuthMiddleware {
  async isLogged(req, res, next) {
    return next();

    if (!req.header('x-api-key') || req.header('x-api-key') != 'yojv8wVLPgh6hVzm3UuU') {
      return res.sendStatus(401);
    }

    return next();
  }
}

module.exports = new AuthMiddleware();
