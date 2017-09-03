import Index from '../controllers/index';
import call from './proxyClient';

var express = require('express');
var router = express.Router();



router.get('/', call(Index.getIndex, (req, res, next) => [res]));

module.exports = router;