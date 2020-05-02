/* eslint-disable no-undef */

const generateRandomQuery = require('../db/seedhelper.js');

describe('Testing seedhelper function', () => {
  it('should return a query string', () => {
    expect(typeof generateRandomQuery()).toBe('string');
  });
  it('should not be an empty string', () => {
    expect(generateRandomQuery()).not.toBe('');
  });
  it('should contain trip information', () => {
    expect(generateRandomQuery()).toMatch(/trip/);
  });
  it('should contain departure information', () => {
    expect(generateRandomQuery()).toMatch(/Departure/);
  });
  it('should contain pickup information', () => {
    expect(generateRandomQuery()).toMatch(/pick up/);
  });
  it('should generate random data', () => {
    expect(generateRandomQuery()).not.toBe(generateRandomQuery());
  });
});
