
# BookTour - Booking Module

A tour trip booking module built with React, ExpressJS and mysql database.

The user is able to click on a booking calendar, choose a tour date, and check the availability and price.

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

## Demo of the module
When the page first loaded, you should see a booking module and be able to click on the calendar.
The default chosen date is current date and past dates are greyed out.

![Choose Date](https://media.giphy.com/media/XfmPSh7pDOiXXfGSmR/giphy.gif)


When you click on a date, you will see the page to choose traveler count and then check the total price and availability.

![Choose Traveler](https://media.giphy.com/media/gKZse44KJN63yxtFEY/giphy.gif)


When the total selected travelers exceeds the tour seats on a certain date, you will see a tour not available page.

![Choose Traveler](https://media.giphy.com/media/Xf7HY9A3PZwD679EzP/giphy.gif)


## Running the tests

To run the automated tests:
```
npm run test
```

## Deployment

To create app docker images and deploy to dockerhub:
```
npm run build-docker
```


## Related Projects

Express Proxy server to serve all team modules:

- https://github.com/tinaxing14/BookTour-Proxy-Server

Team Modules:
  - https://github.com/NoStepOnSnake/tripadvisor-reviews-server
  - https://github.com/NoStepOnSnake/tripadvisor-gallery-server
  - https://github.com/NoStepOnSnake/tripadvisor-itenerary-server


