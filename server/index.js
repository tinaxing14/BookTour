/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { getPrice, getTripData } = require('./controller.js');

const app = express();
const router = express.router();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`\x1b[32m Server listening on PORT\x1b[36m ${PORT}`));

// logger
app.use(morgan('tiny'));

app.use(express.json());

// serving static file
app.use(express.static(path.join(__dirname, '../client/dist')));

// route for specific tripid, date and number of people
router.get('/api/trip/:id/calendar', getPrice);
router.get('/api/trip/price', getTripData);
