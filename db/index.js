/* eslint-disable no-console */
const mysql = require('mysql');

const config = require('./config.js');

const connection = mysql.createConnection(config);


connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('database connected!!!');
  }
});

module.exports = connection;
