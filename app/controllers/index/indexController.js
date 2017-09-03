import baseController from '../BaseController';
import User from '../../models/users';

exports.getIndex = (req, res, next) => {
    res.render('index', {
        title: 'ExpressMVC'
    });
}

exports.getUserCount = async(req, res, next) => {
    const userCount = await User.count({});
    res.send(`Total number of users are ${userCount}`);
}
