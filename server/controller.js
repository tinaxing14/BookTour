const model = require('../db/model.js');

module.exports = {
  getPrice: (req, res) => {

    model.fetchTripData() => {
      
    }) 
  },

  getTripData: (req, res) => {
    //get the current date in "20200501" format
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = (today.getMonth() + 1).toString().padStart(2, 0);
    const day = today.getDate().toString().padStart(2, 0);
    const date = year + month + day + date;
    const tripId = req.params.id;

    model.fetchCurrentTrip(date, tripId, (err, results) => {
      if (err) {
        res.status(500).end()
      } else {
        res.json(results)
      }
    })
  },
};
