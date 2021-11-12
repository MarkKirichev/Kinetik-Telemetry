require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const portWs = 3001;
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: portWs });

app.engine('.html', require('ejs').__express);
app.set('views', (__dirname + '/app/views/'));
app.set('view engine', 'html');

app.use(cors());
app.use(express.static('app/public'));
require('./app/controllers/routes')(app, wss, WebSocket);

app.listen(port, () => console.log(`Listening at :${port}`));

const CronList = require('./crons/cronList');