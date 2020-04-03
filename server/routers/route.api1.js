/* load all the libs */
var express       = require('express');
var router        = express.Router();
var controller    = require('../controller/controller.v1.js');

const userRoute = "/user";
const userID = "/:userID";

const postRoute = "/posts";
const postID = "/:postID";

const partRoute = "/parts";
const partID = "/:partID";

/* all route will write here */

// index endpoint
router.get("/" , controller.Index);

/* user endpoints */
router.get(userRoute + userID, controller.findUser);
router.put(userRoute + userID, controller.updateUser);
router.post(userRoute, controller.createUser);
router.delete(userRoute + userID, controller.removeUser);

// user's collection endpoint
router.put(userRoute + userID + "/collection" + partID, controller.updateToCollection)
router.delete(userRoute + userID + "/collection" + partID, controller.removeFromCollection)
// router.get(userRoute + "/collection", controller)

/* post endpoints */
router.get(postRoute + postID, controller.getPost);
// I'm assuming getting posts by location and uid will be done through query strings?
router.get(postRoute, controller.findPost);
router.put(postRoute + postID, controller.updatePost);
router.post(postRoute, controller.createPost);
router.delete(postRoute + postID, controller.deletePost);

/* part endpoints */
router.get(partRoute + partID, controller.getPart);
// Using query strings here too...
router.get(partRoute, controller.findPart);
router.post(partRoute, controller.createPart);
router.put(partRoute + partID, controller.updatePart);


/* end of route  */
module.exports = router;
