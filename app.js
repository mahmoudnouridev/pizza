const port = 80;
const express = require('express');
const app = express();

require('./views/routes')(app);

app.listen(port, _=>{console.log('Connected on port ' + port);});
