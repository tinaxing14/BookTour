const model = require('../db/model.js');
const { formatDate } = require('./helpers.js')

module.exports = {
  getPrice: (req, res) => {

    model.fetchTripData() => {
      
    }) 
  },

  getTripData: (req, res) => {
    const tripId = req.params.id;
    const today = new Date();
    today = formatDate(today);
    
    model.fetchCurrentTrip(date, tripId, (err, results) => {
      if (err) {
        res.status(500).end()
      } else {
        res.json(results)
      }
    })
  },
};
