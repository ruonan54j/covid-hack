const {db} = require('../util/admin');
const postCollection = db.collection('posts');

exports.findPost = function(req, res, next){
    
    // Will add querying / pagination limits to limit posts returned
    postCollection
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

exports.getPost = function(req , res , next){
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

exports.updatePost = function(req , res , next){
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

exports.createPost = function(req , res , next){
    let post = req.body;
    // TODO: Validate Post data fields

    let addPost = db.collection('posts').add(post);
    res.status(200);
}

exports.deletePost = function(req , res , next){

    let deleteDoc = postCollection.doc(req.params.postID).delete();
    res.status(200);

}

// exports.generateData = function()
