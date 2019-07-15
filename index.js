const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  //   res.send('Hello World!');
  res.status(200).json({ message: 'hello world' });
});

module.exports.handler = serverless(app);
