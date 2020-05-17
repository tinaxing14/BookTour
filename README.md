
# TourTrip Booking Module

A tour trip booking module built with React, ExpressJS and mysql database.

The user is able to click on the booking calendar, choose a tour date, check the availability and price.

## Getting Started
Before you start, please have mysql database downloaded and create a config.js file in db folder,
edit the password to your password:
```
module.exports = {
  host: 'localhost',
  user: 'root',
  password: 'password_here',
  database: 'trip_booking',
};
```

To download dependencies:
```
npm install
```

To seed database:
```
npm seed
```

To start the server:
```
npm run start
```

## Running the tests

To run the automated tests:
```
npm run test
```

## Demo of the module




## Deployment

To create app docker images and deploy to dockerhub:
```
npm run build-docker
```


