const express = require('express');
const { getPrice, getTripData } = require('./controller.js');

const router = express.Router();

router.get('/:id/price', getTripData);
router.get('/:id/calendar', getPrice);

module.exports = router;
