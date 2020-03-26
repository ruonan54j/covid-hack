/* load all the libs */
var express       = require('express');
var router        = express.Router();
var controller    = require('../controller/controller.v1.js');

/* all route will write here */
router.get("/" , controller.Index);


/* end of route  */


module.exports = router;
