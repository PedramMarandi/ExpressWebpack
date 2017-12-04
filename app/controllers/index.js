import User from '../models/User';

exports.getIndex = () => (req, res) =>
  res.json({
    status: 'Server is running',
  });
