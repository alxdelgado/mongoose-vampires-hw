// Setting up mongoose. 
const mongoose = require('mongoose'); 

// Creating the schema 
const vampireSchema = new mongoose.Schema({
  name: String, 
  hair_color: String, 
  eye_color: String, 
  dob: Number, 
  loves: String, 
  location: String, 
  gender: String, 
  victims: Number
});

// Exporting
module.exports = mongoose.model('Vampire', vampireSchema); 