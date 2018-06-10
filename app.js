var express = require('express'); // adding the express to the project
var app = express();//executing the express module to access its functionality
var morgan = require('morgan');
var path = require('path');
var html = require('html').renderFile;
var routes = require('./app/routes/routes');// page routes
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.set('view engine', 'html');

/*database setup ==============
*/
var database = require('./app/config/database');
mongoose.connect(database.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Successfully connected to the database!");
});


app.use(morgan('dev'));//logging all the requests
app.use(bodyParser.urlencoded({'extended':'true','limit' : '50mb'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json({'limit':'50mb'})); // parse application/json
app.use(express.static(path.join(__dirname, '/app/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));

app.use('/app',routes);// load the routes
module.exports = app;