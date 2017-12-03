import { Router } from 'express';

const router = Router();
/* GET users listing. */
router.get('users/:username', (req, res) => {
  const { username } = req.params;
  return res.json({
    username,
    status: 'User is activated',
  });
});

module.exports = Router;
