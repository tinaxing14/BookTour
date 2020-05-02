/* eslint-disable no-console */

const Promise = require('bluebird');

const DB = require('./index.js');

const generateRandomQuery = require('./seedhelper.js')

const promiseArr = [];
let i = 100;
while (i > 0) {

  const promises = DB.queryAsync(generateRandomQuery());
  // mysql connection is promisified in DB index.js file, put queries into promiseArr
  // to resolve the promises together and then show the data insertion complete message to the user.
  promiseArr.push(promises);

  i -= 1;
}

Promise.all(promiseArr)
  .then(() => {
    console.log('data insertion completed!');
  })
  .catch((err) => {
    console.log(err);
  });
