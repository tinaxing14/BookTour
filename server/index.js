/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes.js');
const cors = require('cors');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`\x1b[32m Server listening on PORT\x1b[36m ${PORT}`));

app.use(cors());
// logger
app.use(morgan('tiny'));

// request body parser
app.use(express.json());
app.use(compression());


// serving static file

app.use(express.static(path.join(__dirname, '../client/dist')));



// use router to route the requests to same path
app.use('/api/trip', router);
