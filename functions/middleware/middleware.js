const {firebase} = require('../util/firebase');

// authenticate user on login pages
exports.authenticateUser = function(req, res, next){

    // Check for a valid authentication token in request header

    // If there's a token present, check with Firebase auth if token is valid
    // If valid, add the userID and/or handle to the request data for later use

    // Else flag the req.firebaseAuth property as a bad value

}

// on signUp
exports.sendConfirmationEmail = function(req, res, next){

    // After data is initialized, send a confirmation email for verification
    // Firebase has functionality for this, I can check - so we may not need to hard-code this

}


// This may or may not be additional middleware - keeping it here for now

// when post location is updated/created 
exports.getLatLonPost = function(){

}

// when user location is updated/created 
exports.getLatLonUser = function(){

}