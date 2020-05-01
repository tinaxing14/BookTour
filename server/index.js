const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`\x1b[32m Server listening on PORT\x1b[36m ${PORT}`));

// logger 
app.use(morgan("tiny"))

app.use(express.json());

// serving static file 
app.use(express.static(path.join(__dirname, '../client/dist')));
