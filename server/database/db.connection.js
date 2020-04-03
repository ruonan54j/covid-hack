var config      = require("../config/env.js")
var mongoose    = require('mongoose');


mongoose.Promise = global.Promise;
console.log(config.DbHost)
var db = mongoose.connect(config.DbHost, config.DbOptions);

module.exports = db;