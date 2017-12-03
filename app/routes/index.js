import { Router } from 'express';
import Index from '../controllers/index';

const router = Router();
router.get('/', Index.getIndex());

module.exports = router;
