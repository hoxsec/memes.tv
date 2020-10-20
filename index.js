// Node packages
const express = require('express');
const app = express();
const port = process.env.PORT; 

require('./src/routes')(app);

app.listen(port, () => {
  console.log(`App running on : http://localhost:${port}`)
});


