import User from '../models/User';

/** 
 * All of the controllers should return Promise function.
 * @param Express res
 * @returns Promise 
 */
exports.getIndex = async function(res) {
    return Promise.resolve().then(res.render('index', {
        title: 'ExpressMVC'
    }));
}