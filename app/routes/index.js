import Index from '../controllers/index/indexController';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req, res, next) {
    next();
});

router.get('/', Index.getIndex);
router.get('/userCount', Index.getUserCount);

module.exports = router;