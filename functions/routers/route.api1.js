/* load all the libs */
var express       = require('express');
var router        = express.Router();
var userController = require('../controller/userController');
var postController = require('../controller/postController');
var partController = require('../controller/partController');

const userRoute = "/user";
const userID = "/:userID";

const postRoute = "/posts";
const postID = "/:postID";

const partRoute = "/parts";
const partID = "/:partID";

/* all route will write here */

// index endpoint
router.get("/" , function(req , res ,next){
    res.json({msg:"ok"});
});

/* user endpoints */
router.get(userRoute + userID, userController.findUser);
router.put(userRoute + userID, userController.updateUser);
router.post(userRoute, userController.createUser);
router.delete(userRoute + userID, userController.removeUser);

// user's collection endpoint
router.put(userRoute + userID + "/collection" + partID, userController.updateToUserCollection)
router.delete(userRoute + userID + "/collection" + partID, userController.removeFromUserCollection)
// router.get(userRoute + "/collection", controller)

/* post endpoints */
router.get(postRoute + postID, postController.getPost);
// I'm assuming getting posts by location and uid will be done through query strings?
router.get(postRoute, postController.findPost);
router.put(postRoute + postID, postController.updatePost);
router.post(postRoute, postController.createPost);
router.delete(postRoute + postID, postController.deletePost);

/* part endpoints */
router.get(partRoute + partID, partController.getPart);
// Using query strings here too...
router.get(partRoute, partController.findPart);
router.post(partRoute, partController.createPart);
router.put(partRoute + partID, partController.updatePart);


/* end of route  */
module.exports = router;
