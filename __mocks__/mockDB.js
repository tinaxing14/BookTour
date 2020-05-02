const MySQL = require('mysql-bluebird');

const mockDB = new MySQL({
  host: 'localhost',
  user: 'test@localhost',
  database: 'mock',
});
module.exports = mockDB;
