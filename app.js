const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname + '/application')));

app.listen(port, () => {
    console.log('Application running on port: ' + port);
}); //Set up port number