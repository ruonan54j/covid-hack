/* load all the libs */
const express           = require('express');
const router            = express.Router();
const userController    = require('../controller/userController');
const postController    = require('../controller/postController');
const partController    = require('../controller/partController');
const middleware        = require('../middleware/middleware');

const userRoute = "/users";
const userHandle = "/:userHandle";

const postRoute = "/posts";
const postID = "/:postID";

const partRoute = "/parts";
const partID = "/:partID";

/* all route will write here */

// Index endpoint - may not need this
router.get("/" , (req , res ,next) => {
    res.json({msg:"ok"});
});

// Login Endpoint
router.post("/login", userController.loginUser);
// Sign up user
router.post("/signup", userController.signUpUser, middleware.sendConfirmationEmail);
// Remove user
router.delete(userRoute + userHandle, userController.removeUser);

// User Endpoints
router.get(userRoute + userHandle, userController.findUser);
router.put(userRoute + userHandle, userController.updateUser);
// User Collection endpoint
router.put(userRoute + userHandle + "/collection" + partID, userController.updateToUserCollection)
router.delete(userRoute + userHandle + "/collection" + partID, userController.removeFromUserCollection)

// Post Endpoints
router.get(postRoute + postID, postController.getPost);
router.get(postRoute, postController.findPost);
router.put(postRoute + postID, postController.updatePost);
router.post(postRoute, postController.createPost);
router.delete(postRoute + postID, postController.deletePost);

// Part Endpoints
router.get(partRoute + partID, partController.getPart);
router.get(partRoute, partController.findPart);
router.post(partRoute, partController.createPart);
router.put(partRoute + partID, partController.updatePart);

module.exports = router;
