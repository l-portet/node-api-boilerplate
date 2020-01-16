const sampleModel = require('../models/samples');

const controller = {
  sampleMethod(req, res, next) {
    res.send({
      status: 'ok',
      message: 'Sample'
    });
  }
};

module.exports = controller;
