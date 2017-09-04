import database from './db';

const project = {
    project: 'CRIBBBLE BACKEND',
    url: 'localhost',
    api: {
        url: 'https://api.dribbble.com/v1/'
    },
    port: parseInt(process.env.PORT),        
    mongo: database  
};


// You can store the environment-based configs in this object
const environemnts = {
    production: {
       
    },
    development: {

    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(project, environemnts);