const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// To be used later.
// app.use(bodyParser.urlencoded({
//     extended: false
// }));


app.use('/', express.static(path.join(__dirname + '/application')));

// front-end package management, while exposing the package dependency model via an API using Bower 
app.use(express.static(path.join(__dirname, 'bower_components')));

app.listen(port, () => {
    console.log('Application running on port: ' + port);
}); //Set up port number