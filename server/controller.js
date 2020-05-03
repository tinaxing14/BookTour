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
};
