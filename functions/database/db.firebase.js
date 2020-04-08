var config      = require("../config/env");
var firebase    = require('firebase');

var firebaseConfig = {
    apiKey: config.FIRE_API_KEY,
    authDomain: config.FIRE_AUTH_DOMAIN,
    databaseURL: config.FIRE_DB_URL,
    projectId: config.FIRE_PROJECT_ID,
    storageBucket: config.FIRE_STORAGE_BUCK,
    messagingSenderId: config.FIRE_MSG_SENDERID,
    appId: config.FIRE_APP_ID
}

var fire = firebase.initializeApp(firebaseConfig);
module.exports = fire;