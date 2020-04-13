const {firebase} = require('../util/firebase');
const {admin, db} = require('../util/admin');

// Authenticate user on protected routes
exports.authenticateUser = function(req, res, next){

    // Default isAuthorized is false, until token is successfully verified
    res.locals.isAuthorized = false;

    // Check for a valid authentication token in request header
    // If there's a token present, check with Firebase auth if token is valid
    // If valid, add the userID and/or handle to the response-local data for later use
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        res.locals.user.token = req.headers.authorization.split('Bearer ')[1];
        admin.auth().verifyIdToken(res.locals.user.token)
            .then(userID => {
                res.locals.user.userID = userID;
                return db.collection('users')
                    .where('userID', '==', res.locals.user.userID)
                    .limit(1)
                    .get()
            })
            .then(data => {
                res.locals.user.data = data.docs[0].data();
                res.locals.isAuthenticated = true;
                return next();
            })
            .catch(err => {
                console.error('Error while verifying token');
                return res.status(403).json(err);
            });
    }
    else{
        console.log('No Token Found');
        return next();
    }

}

// Send Confirmation Email
exports.sendConfirmationEmail = function(req, res, next){

    // After data is initialized, send a confirmation email for verification
    // Firebase has functionality for this, I can check - so we may not need to hard-code this

}

// Dependent on Latitude/Longitude
exports.getLatLon = function(){

}