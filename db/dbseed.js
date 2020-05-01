/* eslint-disable no-console */
const _ = require('underscore');

const Promise = require('bluebird');

const DB = require('./index.js');

const thingsToDo = ['a day trip at ', 'a nice day trip at ', 'explore the beautiful ', 'a full day trip at '];

const location = ['Chengdu', 'Macau', 'Philadelphia', 'Boston', 'Washington DC', 'Yosemite', 'Yellowstone', 'Arches'];

const departure = ['6:00 am', '7:00 am', '8:00 am'];

const arrival = ['7:00pm', '5:00pm', '4:00pm'];


let i = 100;

const promiseArr = [];

while (i > 0) {
  const randomThingsTodo = thingsToDo[_.random(0, 3)] + location[_.random(0, 4)];

  const description = `${departure[_.random(0, 2)]} Departure - ${randomThingsTodo} pick up included!`;

  const duration = `${departure[_.random(0, 2)]} Departure - ${arrival[_.random(0, 2)]}`;

  const cancelation = ['24', '48', '72'][_.random(0, 2)];

  const totalbooked = _.random(2000, 3000);

  const sql = `insert into trips (tripname, detail, duration, cancelation, totalbooked) VALUES ("${randomThingsTodo}","${description}","${duration}","${cancelation}","${totalbooked}")`;

  const promises = DB.queryAsync(sql);
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
