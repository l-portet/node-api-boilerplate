const express = require('express');
const sampleController = require('../controllers/sample');

const router = express.Router();

router.get('/', sampleController.sampleMethod);

module.exports = router;
