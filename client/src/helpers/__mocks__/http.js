
//import data from '../apiExampleData';
const data = require('../../apiExampleData');

module.exports = {
  fetchTripData: () => Promise.resolve(data.resJsonData2),

  fetchPrice: () => Promise.resolve([data.resJsonData]),
};