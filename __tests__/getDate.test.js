const date = require('../client/src/helpers/getDate.js')


describe('unit tests for getDate helper functions module', () => {
  test('getCancelationDate function should return a string', () => {
    expect(typeof date.getCancelationDate(['May', 8, 2020], 24)).toBe('string');
  });
  test('getCancelationDate function should calculate the correct cancelation date', () => {
    expect(date.getCancelationDate(['May', 8, 2020], 24)).toEqual('May 9');
    expect(date.getCancelationDate(['May', 8, 2020], 48)).toEqual('May 10');
    expect(date.getCancelationDate(['May', 31, 2020], 48)).toEqual('Jun 2');
    expect(date.getCancelationDate(['Jun', 30, 2020], 24)).toEqual('Jul 1');
  });

  test('getToday function should get date of today and return an array', () => {
    expect(Array.isArray(date.getToday())).toBe(true);
    const months = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec',
    ];
    expect(months.indexOf(date.getToday()[0]) >= 0).toBe(true);
  });

  test('getNextMonthYear function should return array of next month', () => {
    expect(Array.isArray(date.getNextMonthYear(['May, 2020']))).toBe(true);
    expect(date.getNextMonthYear(['May', 2020])).toEqual(['Jun' ,2020]);
    expect(date.getNextMonthYear(['Jun', 2020])).toEqual(['Jul' ,2020]);
    expect(date.getNextMonthYear(['Dec', 2020])).toEqual(['Jan' ,2021]);

  });

  test('getPreviousMonthYear function should return array of previous month', () => {
    expect(Array.isArray(date.getPreviousMonthYear(['May, 2020']))).toBe(true);
    expect(date.getPreviousMonthYear(['May', 2020])).toEqual(['Apr' ,2020]);
    expect(date.getPreviousMonthYear(['Jun', 2020])).toEqual(['May' ,2020]);
    expect(date.getPreviousMonthYear(['Jan', 2021])).toEqual(['Dec' ,2020]);
  });
  
  test('getDateStr function should return a date in string format with correct 0 padding', () => {
    expect(typeof date.getDateStr(['May', 8, 2020], 24)).toBe('string');
    expect(date.getDateStr(['May', 8, 2020])).toBe('20200508');
    expect(date.getDateStr(['Jun', 8, 2020])).toBe('20200608');
    expect(date.getDateStr(['May', 22, 2020])).toBe('20200522');
    expect(date.getDateStr(['Jan', 3, 2020])).toBe('20200103');
    expect(date.getDateStr(['Dec', 22, 2020])).toBe('20201222');
  });
});

