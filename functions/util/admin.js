const admin = require("firebase-admin");
const serviceAccount = require('./firebaseAdminKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://covid-hack-c6549.firebaseio.com"
});
const db = admin.firestore();
module.exports = {admin, db};

