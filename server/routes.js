const express = require('express');
const { getPrice, getTripData } = require('./controller.js');

const router = express.Router();

router.get('/price', getTripData);
router.get('/calendar', getPrice);

module.exports = router;
