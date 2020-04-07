/* this file will handle all config of backend server */

exports.Port      = 8000;
exports.Origin    = "*";

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

/* config for firebase */
exports.FIRE_API_KEY     = "";
exports.FIRE_AUTH_DOMAIN = "";
exports.FIRE_DB_URL      = "";
exports.FIRE_PROJECT_ID  = "";
exports.FIRE_STORAGE_BUCK= "";
exports.FIRE_MSG_SENDERID= "";
exports.FIRE_APP_ID      = "";

/* config for security */
exports.KEY       = "ahhthisismyverysecretcodeyeahhh!!!!!"

