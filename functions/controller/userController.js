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

    db.collection('/users')
        .where("userID", "==", req.params.userID)
        .limit(1)
        .get()
        .then((snapShot) => {
            if(!(snapShot.empty))
                return res.status(200).json(snapShot.docs[0].data());
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

    let token, userID, userData;
    return db.doc(`/users/${newUser.handle}`)
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
            let retUser = data.user;
            return data.user.getIdToken();
        })
        .then((idToken) => {
            token = idToken;
            userData = {
                handle: newUser.handle,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                isVerified: false,
                isSupplier: newUser.isSupplier,
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${noImg}?alt=media`,
                userID
            };
            return db.doc(`/users/${newUser.handle}`).set(userData);
        })
        .then((user) => {
            return res.status(201).json(userData);
        })
        .catch((err) => {
            console.error(err);
            if (err.code === 'auth/email-already-in-use')
                return res.status(400).json({ email: 'Email is already is use in Firebase Auth System' });
            else
                return res.status(500).json({error: err.message});
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

    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            return db.collection('/users')
                .where("userID", "==", data.user.uid)
                .limit(1)
                .get();
        })
        .then(snapShot => {
            if(!(snapShot.empty)){
                return res.status(200).json(snapShot.docs[0].data());
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
    return db.doc(`/users/${res.locals.user.handle}`).update(userDetails)
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

    admin.auth().deleteUser(res.locals.user.userID)
        .then(() => {
            return db.doc(`/users/${res.locals.user.handle}`).delete();
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