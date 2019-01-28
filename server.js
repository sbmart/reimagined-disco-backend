const express = require('express');
const dotenv = require('dotenv').config();
const knex = require('./db/knex');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.use('/rdisko', (req, res) => {
  knex('dragons').then(results => {res.send(results);});
});

const port = process.env.PORT || 5000;
const url = process.env.URL || `http://localhost`

app.listen(port, () => {
  console.log(`Reimagined Disko API is up and running. ${url}:${port}`);
});
