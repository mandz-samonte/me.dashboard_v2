const express = require('express');
const bodyParser = require('body-parser');

// Init
const db = require('./db');
const app = express();

const port = process.env.PORT || 5000;

// Route


// Applying Middleware
app.use(bodyParser.json());

// Connecting database
db.connect((err) => {
  if(err) throw err;

  console.log('Mysql connected...')
})

// Applying routes


// Running SERVER
app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`)
})
