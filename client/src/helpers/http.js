const axios = require('axios');

module.exports = {
  fetchTripData: (id) => axios.get(`/api/trip/${id}/price`)
    .then((response) => response.data),

  fetchPrice: (id, date, adults) => axios.get(`/api/trip/${id}/calendar/?startdate=${date}&enddate=${date}&adults=${adults}`)
    .then((response) => response.data),
};
