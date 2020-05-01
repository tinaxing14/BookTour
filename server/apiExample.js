const url = '/api/trip/1/calendar/?startdate=20200515&enddate=20200515&adults=2';

const resJsonData = {
  tripname: 'a nice day trip at Philadelphia',
  detial: '7:00 am Departure - a day trip at Philadelphia pick up included!',
  duration: '7:00 am Departure - 4:00pm',
  cancelation: 48,
  totalbooked: 2025,
  price: 199,
};

const url2 = '/api/trip/price';

const resJsonData2 = { 
  tripname: 'a nice day trip at Philadelphia',
  detial: '7:00 am Departure - a day trip at Philadelphia pick up included!',
  duration: '7:00 am Departure - 4:00pm',
  cancelation: 48,
  totalbooked: 2025,
  price: 199,
  date: 20200515,
}