/* load all the libs */
const express       = require('express');
const router        = express.Router();
const controller    = require('../controller/controller.v2.js');

/* all route will write here */
router.get("/" , controller.Index);


/* end of route  */


module.exports = router;
