const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/Railway_Consession';

mongoose.connect(dbURL)
  .then(() => {
    console.log('Connection successful');
  })
  .catch((error) => {
    console.log('Connection error:', error);
  });
