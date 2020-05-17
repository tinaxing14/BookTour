const { get } = require('axios');

module.exports = {
  fetchTripData: (id) => get(`/api/trip/${id}/price`)
    .then((response) => response.data),

  fetchPrice: (id, date, adults) => get(`/api/trip/${id}/calendar/?startdate=${date}&enddate=${date}&adults=${adults}`)
    .then((response) => response.data),
};
