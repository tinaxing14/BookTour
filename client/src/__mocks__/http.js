
module.exports = {
  fetchTripData: () => Promise.resolve([{
    tripname: 'Yosemite in a Day', detail: '6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included', duration: '6:00 am Departure - 6:00 AM', cancelation: 24, totalbooked: 3987, price: 199, trip_availability: 20,
  }]),

  fetchPrice: () => Promise.resolve([{
    tripname: 'Yosemite in a Day', detail: '6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included', duration: '6:00 am Departure - 6:00 AM', cancelation: 24, totalbooked: 3987, price: 169, trip_availability: 40,
  }]),
};
