const AuthMiddleware = require('../middlewares/authMiddleware');
const bodyParser = require('body-parser');
const UserController = require('./userController');
const SessionController = require('./sessionController');
const LapController = require('./lapController');
const LapFragmentController = require('./lapFragmentController');

module.exports = (app, wss, WebSocket) => {
  app.use(bodyParser.json());

  wss.on('connection', (ws) => {
    console.log('establish websocket connection');
    ws.on('message', (message) => {
      console.log('received: %s', message);
    });
  });

  app.get('/', AuthMiddleware.isLogged, async (req, res) => {
    return res.render('home');
  });

  // users
  app.get('/api/users', AuthMiddleware.isLogged, async(req, res) => {
    return UserController.execute('findFiltered', req, res, wss, WebSocket);
  });
  app.post('/api/users', AuthMiddleware.isLogged, async (req, res) => {
    return UserController.execute('create', req, res, wss, WebSocket);
  });

  // sessions
  app.get('/api/sessions', AuthMiddleware.isLogged, async(req, res) => {
    return SessionController.execute('findFiltered', req, res, wss, WebSocket);
  });
  app.get('/api/sessions/:id/bestlap', AuthMiddleware.isLogged, async(req, res) => {
    return SessionController.execute('findBestLap', req, res, wss, WebSocket);
  });
  app.post('/api/sessions', AuthMiddleware.isLogged, async(req, res) => {
    return SessionController.execute('create', req, res, wss, WebSocket);
  });

  // laps
  app.get('/api/laps', AuthMiddleware.isLogged, async(req, res) => {
    return LapController.execute('findFiltered', req, res, wss, WebSocket);
  });
  app.post('/api/laps', AuthMiddleware.isLogged, async(req, res) => {
    return LapController.execute('create', req, res, wss, WebSocket);
  });

  // lap fragments
  app.get('/api/lap-fragments', AuthMiddleware.isLogged, async(req, res) => {
    return LapFragmentController.execute('findFiltered', req, res, wss, WebSocket);
  });
  app.post('/api/lap-fragments', AuthMiddleware.isLogged, async (req, res) => {
    return LapFragmentController.execute('create', req, res, wss, WebSocket);
  });
};
