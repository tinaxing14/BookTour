const DB = require('./index.js');

module.exports = {
  fetchTripData: (data, callback) => {
    let sql
    DB.query(sql, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  fetchCurrentTrip: (date, tripId, callback) => {

    const sql = `select tripname, detail, duration, cancelation, totalbooked, price from trips, prices where trip_date = "${date}" and trips.id = "${tripId}"`;
    DB.query(sql, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

};
