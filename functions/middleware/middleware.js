const {firebase} = require('../util/firebase');

// authenticate user on login pages
exports.authenticateUser = function(req, res, next){

    // Check for a valid authentication token in request header

    // If there's a token present, check with Firebase auth if token is valid
    // If valid, add the userID and/or handle to the request data for later use

    // Else flag the req.firebaseAuth property as a bad value

}

exports.signUpUser = function(req, res, next){

    // Figure out how the user signs up (Email/Password, Google Sign-in)

    // Run the corresponding firebase auth function as necessary
    // (What happens if the user already exists?)
    // (What happens if the userHandle is already taken? Any way to automate this on front-end?)

    // Put the userID and/or userHandle in the request body for later (Database initialization)
    // Return back an error

    console.log('Signing up user...');
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
    };

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(data => {
            return res.status(201).json({message: `user ${data.user.uid} signed up successfully`});
        })
        .catch((err) => {
            console.error(err);
            return res.status(500).json({error: err.code})
        });
}

// on signup
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