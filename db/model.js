const DB = require('./index.js');
// DB is promisified in db index.js file, use async await to get query data

module.exports = {
  fetchTripData: async (date, tripId, adults, callback) => {
    try {
      const sql = `select tripname, detail, duration, cancelation, totalbooked, price, trip_availability from trips, prices where trip_date = "${date}" and trips.id = "${tripId}"`;
      const results = await DB.queryAsync(sql);
      results[0].trip_availability = results[0].trip_availability - adults;
      callback(null, results);
    } catch (err) {
      callback(err);
    }
  },

  fetchCurrentTrip: async (date, tripId, callback) => {
    try {
      const sql = `select tripname, detail, duration, cancelation, totalbooked, price, trip_availability from trips, prices where trip_date = "${date}" and trips.id = "${tripId}"`;
      const results = await DB.queryAsync(sql);
      results[0].trip_availability = results[0].trip_availability - 2;
      callback(null, results);
    } catch (err) {
      callback(err);
    }
  },
};
