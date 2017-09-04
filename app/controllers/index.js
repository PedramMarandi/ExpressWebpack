import User from '../models/User';

/** 
 * All of the controllers should return Promise function.
 * @param Express res
 * @returns Promise 
 */
exports.getIndex = async function(res, next) {
    return Promise.resolve().then(() => {
        return {
            message: 'Your backend server is working perfectly'
        }
    });
}