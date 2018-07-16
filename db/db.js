// This will setup our connection
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/vampire'); 
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});
mongoose.connection.on('error', (err) => {
  console.log(err, 'mongoose failed to connect')
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected')
});