const {admin, db} = require('../util/admin');
const {validateNewPostData, isEmpty} = require('../util/validation');
const postCollection = db.collection('posts');
const devAuth = require('../util/env').DevAuth;
let options = {
    provider: 'openstreetmap',
}
const geocoder = require('node-geocoder')(options);

exports.findPost = function(req, res){

    // TODO: Querying by location
    // TODO: Pagination

    //city query put in
    if(req.query.hasOwnProperty('city') && req.query.city !== undefined && !isEmpty(req.query.city)){
        postCollection
        .where('city', "==", req.query.city)
        .get()
        .then((snapShot) => {
            let posts = [];
            snapShot.forEach(doc => {
                let data = doc.data();
                    data.id = doc.id;
                    posts.push(data);
            });
            if(posts.length > 0)
                return res.status(200).json(posts);
            else
                return res.status(204).json({message: 'No posts found within this city'});
        })
        .catch(err => {
            console.error('Error getting collection of posts', err);
        });
    } else if(req.query.hasOwnProperty('handle') && req.query.handle !== undefined && !isEmpty(req.query.handle)) {
        postCollection
        .where('userHandle', "==", req.query.handle)
        .get()
        .then((snapShot) => {
            let posts = [];
            snapShot.forEach(doc => {
                let data = doc.data();
                    data.id = doc.id;
                    posts.push(data);
            });
            if(posts.length > 0)
                return res.status(200).json(posts);
            else
                return res.status(204).json({message: 'No posts found within this city'});
        })
        .catch(err => {
            console.error('Error getting collection of posts', err);
        });
    } else {
        postCollection
            .get()
            .then((snapShot) => {
                let posts = [];
                snapShot.forEach(doc => {
                    let data = doc.data();
                    data.id = doc.id;
                    posts.push(data);
                });
                if(posts.length > 0)
                    return res.status(200).json(posts);
                else
                    return res.status(204).json({message: 'No posts found'});
            })
            .catch(err => {
                console.error('Error getting collection of posts', err);
            });
    }
}

exports.getPost = function(req, res){
    let getPost = postCollection.doc(req.params.postID)
        .get()
        .then((doc) => {
            if (!doc.exists){
                res.status(400).json({error: "Post with this ID doesn't exist"});
                console.log("Post with ID doesn't exist");
                return null;
            }
            else{
                res.status(200);
                res.json(doc.data());
                return doc.data();
            }
        })
        .catch(err => {
            console.error('Error getting post document', err);
            res.status(500);
            res.json(err);
        });
}
/*
exports.removePost = function(req, res){
    postCollection.doc(req.params.postID).delete().then(() => {
        res.status(200);
        return;
    }).catch((error) => {
        res.status(400).json({error:"delete post failed, "+error});
        return;
    });
    return;
}
*/
exports.updatePost = function(req, res){

    if(!res.locals.isAuthenticated && !devAuth)
        res.status(401).json({error: 'Not Authenticated', errorMessage: 'No rogue post creations allowed'}).send();

    if(!res.locals.user.posts.includes(req.body.postID))
        res.status(403).json({error: 'Forbidden Post Edit', errorMessage: "Not in user's post list"}).send();

    let post = req.body;


    // TODO: Validate Post Data Fields

    let getPostResult = postCollection.doc(req.params.postID)
        .update(post)
        .then((writeResult) => {
            res.status(200);
            res.json(writeResult);
            return writeResult;
        })
        .catch((err) => {
            res.status(500);
            res.body(err);
            console.error('Error updating: ', err);
        })
    

}

exports.createPost = function(req, res){

    if(!res.locals.isAuthenticated && !devAuth)
        res.status(401).json({error: 'Not Authenticated', errorMessage: 'No rogue post creations allowed'}).send();

    const newPost = req.body;
    const {valid, errors} = validateNewPostData(newPost);
    if(!valid)
        return res.status(400).json(errors);

    db.collection('posts').add(newPost)
        .then((dataRef) => {
            return db.doc(`/users/${newPost.userID}`).update({
                posts: admin.firestore.FieldValue.arrayUnion(dataRef.id)
            });
        })
        .then(() => {
            return res.status(201).json({message: 'Post Created Successfully', request: req.body});
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({error: err.code, errorMessage: err.message});
        });

}

exports.deletePost = function(req , res){

    if(!req.params.hasOwnProperty('postID') && req.params.postID.trim() === "")
        res.status(400).json({error: 'No Post ID defined'}).send();

    if(!res.locals.isAuthenticated && !devAuth)
        res.status(401).json({error: 'Not Authenticated', errorMessage: 'No rogue post creations allowed'}).send();

    /*
    if(!res.locals.user.posts.includes(req.params.postID))
        res.status(403).json({error: 'Forbidden Post Edit', errorMessage: "Not in user's post list"}).send();
    */

    // TODO: Remove postID from user doc's postID array

    postCollection.doc(req.params.postID).delete()
        .then(() => {
            return res.status(200).json({message: 'Post deletion successful'}).send();
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({error: err.code, errorMessage: err.message}).send();
        })

}

exports.getUserPosts = function(req, res){
    let getPost = postCollection
        .where("userID", "==", req.params.userID)
        .get()
        .then((snapShot) => {
            let posts = [];
            snapShot.forEach(doc => {
                posts.push(doc.data());
            });
            if(posts.length > 0)
                return res.status(200).json(posts);
            else
                return res.status(204).json({message: 'No posts found'});
        })
        .catch(err => {
            console.error('Error getting collection of posts', err);
        });
}

