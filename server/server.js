var env = 'prod';
if (process.argv[2] == 'dev') {
  env = process.argv[2];
}

//GLOBALS
_ = require('underscore');

//module dependencies
var express = require("express");
var http = require("http");
var logger = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

//used for new lander upload
var multer = require('multer');
var methodOverride = require('method-override');
var mysql = require("mysql");
var gzipCompression = require('compression');

var app = express();
app.config = require("./config")(env);
app.log = require("./logger")(app);

var db = mysql.createPool(app.config.dbConnectionInfo);

app.use(gzipCompression());

app.use(bodyParser.json({
  limit: '20mb'
}));

app.use(bodyParser.urlencoded({
  limit: '20mb',
  extended: true
})); // parse application/x-www-form-urlencoded
app.use(methodOverride()); // must come after bodyParser
app.use(multer({ dest: './staging' }).any());

var dbApi = require("./db_api")(app, db);
require("./routes")(app, dbApi);

//create server
http.globalAgent.maxSockets = app.config.maxSockets;
http.createServer(app).listen(app.config.port, function() {
  console.log('Ripbin marketing REST server listening on port ' + app.config.port);
});

module.exports = app;
