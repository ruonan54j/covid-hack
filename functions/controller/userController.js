const {firebase} = require('../util/firebase');
const {db} = require('../util/admin');
const {validateSignUpData} = require('../util/validation');

exports.findUser = function(req , res , next){
}

exports.updateUser = function(req , res , next){
}

// eslint-disable-next-line consistent-return
exports.signUpUser = function(req, res, next){

    const {valid, errors} = validateSignUpData(req.body);
    if (!valid) return res.status(400).json(errors);
    const newUser = req.body;

    let token, userID;
    db.doc(`/users/${newUser.handle}`)
        .get()
        .then((doc) => {
            if (doc.exists)
                throw Error('User Handle already taken');

            if(newUser.signUpMethod === 'Email')
                return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
            else if (newUser.signUpMethod === 'Google')
                return firebase.auth().signInWithCredential(newUser.signUpToken);

            // If the user sign in method is other than Email or Google
            throw Error('Sign up method not supported');
        })
        .then(data => {
            userID = data.user.uid;
            return data.user.getIdToken();
        })
        .then((idToken) => {
            token = idToken;
            const userCredentials = {
                handle: newUser.handle,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                isVerified: false,
                isSupplier: newUser.isSupplier,
                userID
            };
            return db.doc(`/users/${newUser.handle}`).set(userCredentials);
        })
        .then(() => {
            return res.status(201).json({ token });
        })
        .catch((err) => {
            console.error(err);
            if (err.code === 'auth/email-already-in-use')
                return res.status(400).json({ email: 'Email is already is use in Firebase Auth System' });
            else
                return res.status(500).json({error: err.message});
        });

    return next();
}

exports.loginUser = function(req , res , next){
}

exports.removeUser = function(req , res , next){

}

exports.createUser = function(req , res , next){
    
}

exports.updateToUserCollection = function(req , res , next){

}

exports.removeFromUserCollection = function(req , res , next){

}