const express = require('express');
var cors = require('cors')
const routes = require('./routes/home');
const app = express();
app.use(cors({origin: '*'}));
app.use(routes);
const port = 3330;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);  
});