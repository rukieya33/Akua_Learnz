const express = require('express');
var cors = require('cors')
const routes = require('./routes/home');
const app = express();
app.use(routes);
app.options('*', cors())
const port = 3330;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});