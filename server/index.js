const express = require('express');
const morgan = require('morgan');
const path = require('path');

// create express application
const app = express();

const PORT = 3000;

// listen
app.listen(PORT, () => console.log(`\x1b[32m Server listening on PORT\x1b[36m ${PORT}`));

// change the 'Content-Type' that the middleware will parse
app.use(express.json());

// logger 
app.use((req, res, next) => {
  console.log(`\x1b[33m ${req.method}\x1b[37m request at\x1b[33m ${req.url}`);
  console.log(`\x1b[31m${JSON.stringify(req.body)}`);
  
  // next middleware
  next();
});

// serving static file 
app.use(express.static(path.join(__dirname, '../client/dist')));
