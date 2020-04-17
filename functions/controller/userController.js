const {firebase, firebaseConfig} = require('../util/firebase');
const {admin, db} = require('../util/admin');
const {validateSignUpData, reduceUserDetails} = require('../util/validation');
const devAuth = require('../util/env').DevAuth;

const isEmpty = (string) => {
    if (string === null || string === undefined) {
        return false;
    }
    return string.trim() === '';
};

exports.findUser = function(req, res){

    db.doc(`/users/${req.params.userID}`)
        .get()
        .then((doc) => {
            if(!(doc.exists))
                return res.status(200).json(doc.data());
            else
                return res.status(204).json({message: 'User not found'});
        })
        .catch(err => {
            console.error('Error getting user', err);
            return res.status(500).json({error: err.code, errorMessage: err.message});
        });

}

exports.signUpUser = function(req, res){

    const newUser = {
        email: req.body.email,
        password: req.body.password,
        handle: req.body.handle,
        isSupplier: req.body.isSupplier,
        signUpMethod: req.body.signUpMethod
    }
    const {valid, errors} = validateSignUpData(newUser);
    if (!valid) return res.status(400).json(errors);

    let noImg = newUser.isSupplier ? 'no-img-supplier.png' : 'no-img-buyer.png';

    let UserCredentialPromise;
    if(newUser.signUpMethod === 'Email')
        UserCredentialPromise = firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    else if (newUser.signUpMethod === 'Google')
        UserCredentialPromise = firebase.auth().signInWithCredential(newUser.signUpToken);

    let myToken, userID, userData, sysError, sysErrorDetail;
    return UserCredentialPromise
        .then((data) => {
            userID = data.user.uid;
            return data.user.getIdToken();
        })
        .then((token) => {
            myToken = token;
            return db.collection(`/users`)
                .where('userHandle', "==", newUser.handle)
                .get();
        })
        .then(snapShot => {
            if (!(snapShot.empty))
                throw Error('User Handle already taken');
            else{
                userData = {
                    handle: newUser.handle,
                    email: newUser.email,
                    createdAt: new Date().toISOString(),
                    isVerified: false,
                    isSupplier: newUser.isSupplier,
                    imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${noImg}?alt=media`,
                    userID
                };
                return db.doc(`/users/${userData.userID}`).set(userData);
            }
        })
        .then(() => {
            userData.token = myToken;
            return res.status(201).json(userData);
        })
        .catch((err) => {
            console.error(err);
            if (err.code.startsWith('auth/'))
                return res.status(400).json({error: err.code, errorMessage: err.message});
            // Delete firebase account if handle is taken.
            else {
                sysError = err.code;
                sysErrorDetail = err.message;
                return admin.auth().deleteUser(userID)
            }
        })
        .then(() => {
            return res.status(500).json({error: sysError, errorMessage: sysErrorDetail});
        })
        .catch(() => {
            return res.status(500).json({error: sysError, errorMessage: sysErrorDetail, email: "Email still logged... Need admin help"});
        });
}

exports.loginUser = function(req, res) {

    const user = {
        email: req.body.email,
        password: req.body.password,
    }

    console.log(user);
    let errors = {}

    if (isEmpty(user.email)) errors.email = 'Must not be empty';
    if (isEmpty(user.password)) errors.password = 'Must not be empty';
    if (Object.keys(errors) > 0) res.status(400).json(errors).send();

    let userToken, userID;
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            userID = data.user.uid;
            return data.user.getIdToken();
        })
        .then(token => {
            userToken = token;
            return db.doc(`/users/${userID}`)
                .get();
        })
        .then(doc => {
            if(doc.exists){
                const user = doc.data();
                user.token = userToken;
                return res.status(200).json(user);
            }
            else{
                return res.status(204).json({message: 'User not found'});
            }
        })
        .catch(err => {
            console.error("Error signing in: " + err);
            return res.status(500).json({error: err.code}).send();
        });

}

exports.updateUser = function(req, res){

    if(!res.locals.isAuthenticated && !devAuth)
        return res.status(401).json({error: 'Not Authenticated', errorMessage: 'Not authorized to edit user data'}).send();

    let userDetails = reduceUserDetails(req.body);
    return db.doc(`/users/${req.params.userID}`).update(userDetails)
        .then(() => {
            return res.status(200).json({message: "User updated successfully"})
        })
        .catch(err => {
            return res.status(500).json({error: err.code, errorMessage: err.message});
        });
}

exports.removeUser = function(req, res){

    if(!res.locals.isAuthenticated && !devAuth)
        res.status(401).json({error: 'Not Authenticated', errorMessage: 'Not authorized to edit user data'}).send();

    admin.auth().deleteUser(req.params.userID)
        .then(() => {
            return db.doc(`/users/${req.params.userID}`).delete();
        })
        .then(() => {
            return res.status(200).json({message: 'User Deleted Successfully'});
        })
        .catch(err => {
            return res.status(500).json({error: err.code, errorMessage: err.message});
        });
}

exports.updateToUserCollection = function(req, res){

}

exports.removeFromUserCollection = function(req, res){

}

exports.emailRecovery = function(req, res){

}

exports.uploadProfileImage = function(req, res){

    if(!res.locals.isAuthenticated && !devAuth)
        return res.status(401).json({error: 'Not Authenticated', errorMessage: 'Not authorized to edit user data'});

    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');
    const { v4: uuidv4 } = require('uuid');

    const busboy = new BusBoy({headers: req.headers});
    let imageToBeUploaded, imageFilename;
    busboy.on('file', (fieldName, file, filename, encoding, mimeType) => {
        console.log(fieldName);
        console.log(filename);
        console.log(mimeType);

        if(mimeType !== 'image/jpeg' && mimeType !== 'image/png')
            return res.status(415).json({error: 'Unsupported file type submitted'});

        const imageExtension = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
        imageFilename = `${res.locals.user.handle}-${uuidv4()}.${imageExtension}`;
        const filepath = path.join(os.tmpdir(), imageFilename);
        imageToBeUploaded = {filepath, mimeType};

        file.pipe(fs.createWriteStream(filepath));
    });
    busboy.on('finish', () => {
        admin.storage().bucket()
            .upload(imageToBeUploaded.filepath, {
                resumable: false,
                metadata: {
                    metadata: {
                        contentType: imageToBeUploaded.mimeType
                    }
                }
            })
            .then(() => {
                const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${imageFilename}?alt=media`;
                return db.doc(`/users/${res.locals.user.handle}`).update({imageUrl: imageUrl});
            })
            .then(() => {
                return res.status(200).json({message: 'Image uploaded successfully'})
            })
            .catch(err => {
                return res.status(500).json({error: err.code});
            })
    });
    return busboy.end(req.rawBody);
}