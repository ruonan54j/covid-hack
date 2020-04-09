
// Dependency Setup
const express           = require("express");
const bodyParser        = require('body-parser');
const logger            = require("morgan");
const methodOverride    = require("method-override");
const createError       = require('http-errors');
const config            = require("./env.js");
const middleware        = require('../middleware/middleware');

// App Setup
const ORIGIN = config.Origin;
const app = express();

// URL Parser, Logging, and Method Overriding
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));
app.use(methodOverride((req , res) => {
	if (req.body && typeof req.body === "object" && "_method" in req.body){
		let method = req.body._method;
		delete req.body._method;
		return method;
	}
}));

// CORS
app.use((req, res, next) => {
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
app.use((req , res , next) => {
	next(createError(404))
})
app.use(function(err, req, res, next){
    if (err.name === 'UnauthorizedError') {
        res.status(401).send(err);
    }
    else {
        return next(err);
    }
});

module.exports = app;