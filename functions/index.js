const functions = require('firebase-functions');
const app = require('./util/appsetup');
exports.api = functions.https.onRequest(app);
