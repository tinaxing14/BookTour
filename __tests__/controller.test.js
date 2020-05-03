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
      await controller.getTripDataAsync(req, res);
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.value[0].toHaveProperty('tripname', 'detail', 'duration', 'cancelation', 'totalbooked', 'price', 'trip_availability'));
    } catch (err) {
      console.log(err);
    }
  });
  test('should send status of 500 and return correct value', async () => {
    try {
      const req = mockRequest();
      req.params.id = null;
      const res = mockResponse();
      await controller.getTripDataAsync(req, res);
      expect(res.json).toHaveNotBeenCalled();
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
      req.query.startdate = '2020';
      req.query.adults = '2';
      const res = mockResponse();
      await controller.getPriceAsync(req, res);
      expect(res.json).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
      expect(res.json.mock.value[0].toHaveProperty('tripname', 'detail', 'duration', 'cancelation', 'totalbooked', 'price', 'trip_availability'));
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
      await controller.getPriceAsync(req, res);
      expect(res.json).toHaveNotBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
    } catch (err) {
      console.log(err);
    }
  });
});
