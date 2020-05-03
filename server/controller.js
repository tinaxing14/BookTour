/* eslint-disable no-unused-vars */
const Promise = require('bluebird');
const model = require('../db/model.js');
const { formatDate } = require('./helpers.js');

module.exports = {
  getPrice: (req, res) => {
    const { adults, startdate } = req.query;
    const tripId = req.params.id;
    model.fetchTripData(startdate, tripId, adults, (err, results) => {
      if (err) {
        res.status(500).end();
      } else {
        res.json(results);
      }
    });
  },

  getTripData: (req, res) => {
    const tripId = req.params.id;
    const today = formatDate();
    model.fetchCurrentTrip(today, tripId, (err, results) => {
      if (err) {
        res.status(500).end();
      } else {
        res.json(results);
      }
    });
  },

  // promise function for testing. resolve err and success for functionality test

  getTripDataAsync: (req, res) => new Promise((resolve, reject) => {
    const tripId = req.params.id;
    const today = formatDate();
    model.fetchCurrentTrip(today, tripId, (err, results) => {
      if (err) {
        resolve(res.status(500).end());
      } else {
        resolve(res.json(results));
      }
    });
  }),

  getPriceAsync: (req, res) => new Promise((resolve, reject) => {
    const { adults, startdate } = req.query;
    const tripId = req.params.id;
    model.fetchTripData(startdate, tripId, adults, (err, results) => {
      if (err) {
        resolve(res.status(500).end());
      } else {
        resolve(res.json(results));
      }
    });
  }),
};
