/* load all the libs
* if i don't require a lib that you need
* you can add by your own
*
*/
var express       = require("express");
var app           = express();
var server        = require("http").createServer(app);
var bodyParser    = require('body-parser');
var logger        = require("morgan");
var methodOverride= require("method-override");
var createError   = require('http-errors');
var mongoose      = require('mongoose');
var config        = require("./config/env.js");

/* load router file */
var apis1         = require("./routers/route.api1.js");
var apis2         = require("./routers/route.api2.js");

/* set config */
var PORT          = config.Port;
var ORIGIN        = config.Origin;

/* setting for url parser , and logging */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));
app.use(methodOverride(function(req , res){
	if(req.body && typeof req.body == "object" && "_method" in req.body){
		let method = req.body._method;
		delete req.body._method;
		return method;
	}
}));


/* enable cors */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", ORIGIN); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , Authorization");
  next();
});

/* set a router */
app.use("/api/v1",apis1);
app.use("/api/v2",apis2);

/* setting for status code */
app.use(function(req , res , next){
	next(createError(404))
})
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send(err);
    }
    else {
        next(err);
    }
});

/* create connection */
server.listen(PORT , function(){
    console.log("backend server running on port : http://localhost:" + PORT);
})

module.exports = app;
