
// Express Setup
var express       = require("express");
var bodyParser    = require('body-parser');
var logger        = require("morgan");
var methodOverride= require("method-override");
var createError   = require('http-errors');
var config        = require("./env.js");
var middleware    = require('../middleware/middleware');
var ORIGIN = config.Origin;
var app = express();

// URL Parser, Logging, and Method Overriding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));
app.use(methodOverride(function(req , res){
	if (req.body && typeof req.body === "object" && "_method" in req.body){
		let method = req.body._method;
		delete req.body._method;
		return method;
	}
}));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", ORIGIN); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Authentication
// app.use(middleware.authenticateUser);

// Routes
var apis1         = require("../routers/route.api1.js");
var apis2         = require("../routers/route.api2.js");
app.use("/v1",apis1);
app.use("/v2",apis2);

// Status Codes
app.use(function(req , res , next){
	next(createError(404))
})
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send(err);
    }
    else {
        return next(err);
    }
});

module.exports = app;