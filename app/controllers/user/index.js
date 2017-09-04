import {getUser as getUserByUsername} from '../../services/user';
import {createUser} from '../../services/user';

/**
 * Get a user by username.
 * @param username a string value that represents user's username.
 * @returns A Promise, an exception or a value. It depends on the service or controller treatment.
 */
exports.getUser =  async function(username) {
    if(username ==='') 
        return new Error('Username can\'t be empty');

    return await getUserByUsername(username);
}

exports.create = async function (params) {    
    if(params.username === '')
        return new Error('Username can\'t be empty');

    return await createUser(params);
}