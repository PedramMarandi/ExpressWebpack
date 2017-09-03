import database from './db';

const project = {
    project: 'CRIBBBLE BACKEND',
    url: 'localhost',
    api: {
        url: 'https://api.dribbble.com/v1/'
    },
};

const environemnts = {
    production: {

    },
    development: {
        port: parseInt(process.env.PORT),
        mongo: database
    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(project, environemnts);