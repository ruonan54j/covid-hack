/* this file will handle all config of backend server */

exports.Port      = 8000;
exports.Origin    = "*";
exports.DevAuth   = true;

/* config for mongo */
exports.DbHost      = "mongodb://localhost:27017/covid-hack";
exports.DbName      = "covid-hack";
exports.DbUser      = "root";
exports.DbPassword  = "";
exports.DbOptions   = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

/* config for security */
exports.KEY       = "ahhthisismyverysecretcodeyeahhh!!!!!"

