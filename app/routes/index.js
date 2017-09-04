import Index from '../controllers/index';
import call from './proxyClient';
import express, {Router} from 'express';

const router = Router();
router.get('/', call(Index.getIndex, (req, res, next) => [res, next]));

module.exports = router;