/* eslint-disable no-unused-vars */
const url = '/api/trip/1/calendar/?startdate=20200515&enddate=20200515&adults=2';

const resJsonData = [{
  cancelation: 24,
  detail: "6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included",
  duration:"6:00 am Departure - 6:00 AM",
  price: 199, 
  totalbooked: 3987,
  trip_availability: 20,  
  tripname: "Yosemite in a Day",
}];

const resJsonData_price = [{
  cancelation: 24,
  detail: "6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included",
  duration:"6:00 am Departure - 6:00 AM",
  price: 169, 
  totalbooked: 3987,
  trip_availability: 20,  
  tripname: "Yosemite in a Day",
}]

const url2 = '/api/trip/1/price';

const resJsonData2 = [{
  tripname: 'a nice day trip at Philadelphia',
  detail: '7:00 am Departure - a day trip at Philadelphia pick up included!',
  duration: '7:00 am Departure - 4:00pm',
  cancelation: 48,
  totalbooked: 2025,
  price: 199,
  date: 20200515,
}];

module.exports = {resJsonData, resJsonData2, resJsonData_price};
