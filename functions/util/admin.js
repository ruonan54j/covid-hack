const admin = require("firebase-admin");
const serviceAccount = require('./firebaseAdminKey.json');
const firebase = require('firebase');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://covid-hack-c6549.firebaseio.com"
});
const db = admin.firestore();
const storageRef = firebase.storage().ref();
module.exports = {admin, db, storageRef};

