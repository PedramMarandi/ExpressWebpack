const project = {
    project: 'CRIBBBLE BACKEND',
    url: 'localhost',
    api: {
        url: 'https://api.dribbble.com/v1/'
    },
};

const environemnts = {
    production: {
        isProduction: false,
    },
    development: {
        port: parseInt(process.env.PORT),
    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign(project, environemnts);