import database from './db';

const project = {
  project: 'CRIBBBLE BACKEND',
  url: 'localhost',
  api: {
    url: 'https://api.dribbble.com/v1/',
  },
  port: parseInt(process.env.PORT, 10) || 3000,
  mongo: database,
};

// You can store the environment-based configs in this object
const env = {
  production: {},
  development: {},
}[process.env.NODE_ENV || 'development'];

const config = Object.assign(project, env);

module.exports = config;
