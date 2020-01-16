require('dotenv').config();

// Import
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const mongoose = require('./config/database.js');
const validateUser = require('./middlewares/sample.js');

const routes = {
  sample: require('./routes/sample')
};

// Setup
const port = process.env.PORT || 3000;
const app = express();

app.set('secretKey', process.env.SECRET_KEY);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// Router
app.use('/sample', routes.sample);

// Default
app.get('/', (req, res) => {
  res.send({ status: 'success' });
});

// Error handling
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  if (err.status === 404)
    res.status(404).json({ message: err.message || 'Not found' });
  else
    res.status(500).json({ message: err.message || 'Something looks wrong' });
});

// Start
app.listen(port, () => console.log(`Listening on port ${port}`));
