const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyCN3T3MZt4jSS66QpRIG2N4l6VO11eqpP8",
    authDomain: "covid-hack-c6549.firebaseapp.com",
    databaseURL: "https://covid-hack-c6549.firebaseio.com",
    projectId: "covid-hack-c6549",
    storageBucket: "covid-hack-c6549.appspot.com",
    messagingSenderId: "976843410076",
    appId: "1:976843410076:web:6ae76390cdf1058a0abb59",
    measurementId: "G-0F0E3H98LS"
};
firebase.initializeApp(firebaseConfig);
module.exports = {firebase, firebaseConfig};


