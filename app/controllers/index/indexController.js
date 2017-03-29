import baseController from '../BaseController';
import UserModel from '../../models/users';

export default class indexController extends baseController {
    index(req, res, next) {
        res.render('index', { title: 'ExpressMVC' });
    }
}