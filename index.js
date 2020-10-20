// Node packages
const express = require('express');
const app = express();
const port = process.env.PORT; 
const path = require('path');

app.use(express.static("public"));

require('./src/routes')(app, path);

app.listen(port, () => {
  console.log(`App running on : http://localhost:${port}`)
});


