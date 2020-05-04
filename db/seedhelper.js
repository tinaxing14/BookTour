
const _ = require('underscore');

const thingsToDo = ['a day trip at ', 'a nice day trip at ', 'explore the beautiful ', 'a full day trip at '];

const location = ['Chengdu', 'Macau', 'Philadelphia', 'Boston', 'Washington DC', 'Yosemite', 'Yellowstone', 'Arches'];

const departure = ['6:00 am', '7:00 am', '8:00 am'];

const arrival = ['7:00pm', '5:00pm', '4:00pm'];

const generateRandomQuery = () => {
  const randomThingsTodo = thingsToDo[_.random(0, 3)] + location[_.random(0, 4)];
  const description = `${departure[_.random(0, 2)]} Departure - ${randomThingsTodo} pick up included!`;
  const duration = `${departure[_.random(0, 2)]} Departure - ${arrival[_.random(0, 2)]}`;
  const cancelation = ['24', '48', '72'][_.random(0, 2)];
  const totalbooked = _.random(2000, 3000);

  const sql = `insert into trips (tripname, detail, duration, cancelation, totalbooked) VALUES 
    ("${randomThingsTodo}","${description}","${duration}","${cancelation}","${totalbooked}")`;
  return sql;
};

module.exports = generateRandomQuery;
