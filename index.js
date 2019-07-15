const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', function(req, res) {
  res.status(200).json({ message: 'hello world' });
});

// post request that takes in a ip address and returns info about it

module.exports.handler = serverless(app);
