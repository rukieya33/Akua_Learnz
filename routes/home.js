const express = require('express');
const route = express();

route.get('/', (req, res) => {
  res.send('Welcome to Akua :)');  
});

module.exports = route;