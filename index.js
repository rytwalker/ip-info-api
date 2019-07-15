require('dotenv').config();
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  const ip = '24.112.204.161';
  //
  console.log(process.env.ACCESS_KEY);
  fetch(`http://api.ipstack.com/${ip}?access_key=${process.env.ACCESS_KEY}`)
    .then(res => res.json())
    .then(json => {
      res.status(200).json(json);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

app.listen(4000, () => console.log('app running on port 4000'));

module.exports.handler = serverless(app);
