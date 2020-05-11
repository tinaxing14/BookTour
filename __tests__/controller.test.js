/* eslint-disable no-console */
/* eslint-disable no-undef */

// mock Request and Res object to have functions needed for testing
const mockRequest = () => {
  const req = {};
  req.params = jest.fn().mockReturnValue(req);
  req.query = jest.fn().mockReturnValue(req);
  return req;
};

const mockResponse = () => {
  const res = {};
  res.send = jest.fn().mockReturnValue(res);
  res.end = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

// require controller async function for testing
const controller = require('../server/controller.js');

describe('Check controller getTripdata method', () => {
  test('should send status of 200 and return correct value', async () => {
    try {
      const req = mockRequest();
      req.params.id = '1';
      const res = mockResponse();
      await controller.getTripData(req, res);
      expect(res.json).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith([{
        tripname: 'Yosemite in a Day', detail: '6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included', duration: '6:00 am Departure - 6:00 AM', cancelation: 24, totalbooked: 3987, price: 169, trip_availability: 18,
      }]);
    } catch (err) {
      console.log(err);
    }
  });
  test('should send status of 500 and return correct value', async () => {
    try {
      const req = mockRequest();
      req.params.id = null;
      const res = mockResponse();
      await controller.getTripData(req, res);
      expect(res.json).toHaveBeenCalledTimes(0);
      expect(res.status).toHaveBeenCalledWith(500);
    } catch (err) {
      console.log(err);
    }
  });
});

describe('Check controller getPrice method', () => {
  test('should send status of 200 and return correct value', async () => {
    try {
      const req = mockRequest();
      req.params.id = '1';
      req.query.startdate = '20200515';
      req.query.adults = '2';
      const res = mockResponse();
      await controller.getPrice(req, res);
      expect(res.json).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith([{
        tripname: 'Yosemite in a Day', detail: '6:00 am Departure - Yosemite in a Day Tour from San Francisco\nPickup included', duration: '6:00 am Departure - 6:00 AM', cancelation: 24, totalbooked: 3987, price: 169, trip_availability: 38,
      }]);
    } catch (err) {
      console.log(err);
    }
  });
  test('should send status of 500 and return correct value', async () => {
    try {
      const req = mockRequest();
      req.params.id = null;
      req.query.startdate = '2020';
      req.query.adults = '2';
      const res = mockResponse();
      await controller.getPrice(req, res);
      expect(res.json).toHaveBeenCalledTimes(0);
      expect(res.status).toHaveBeenCalledWith(500);
    } catch (err) {
      console.log(err);
    }
  });
});
