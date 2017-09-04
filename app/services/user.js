import User from '../models/User';

export function getUser(username) {
    return User.find({username}).exec(); // A promise
}

export function createUser(params) {
    const {username, firstname, lastname, password} = params;

    return User.create({
        username,
        firstname, 
        lastname,
        password
    }); 
}

export function isPedram(firstname) {
    return firstname === 'Pedram';
}
