const MySQL = require('mysql-bluebird');
// mysql async wrapper

const mockDB = new MySQL({
  host: 'localhost',
  user: 'test@localhost',
  database: 'mock',
});
module.exports = mockDB;
