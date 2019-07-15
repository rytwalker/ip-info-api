const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const iplocation = require('iplocation').default;
const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  const ip = '56.70.97.8';
  try {
    const ipData = await iplocation(ip);
    res.status(200).json(ipData);
  } catch (error) {
    res.status(400).json(error);
  }
});

// post request that takes in a ip address and returns info about it

module.exports.handler = serverless(app);
