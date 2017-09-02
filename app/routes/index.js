import indexController from '../controllers/index/indexController';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req, res, next) {
    console.log(req.query.name);
    next();
});

router.get('/', new indexController().index);
module.exports = router;