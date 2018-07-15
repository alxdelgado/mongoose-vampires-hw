// Setting up the server 
const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser'); 
const methodOverride = require('method-override');

// Require our database. 
require('./db/db');

// Require our middleware 
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method')); 

// Require the controller after the middleware 
const vampireController = require('./controller/vampireController');

// Require port listening 
app.listen(5577, () => {
  console.log('Receiving on port 5577')
});