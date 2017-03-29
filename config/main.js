const environemnt = {
     production: {
        isProduction: false,
     },
     development: {
        isDevelopment: false,
     }
}[process.env.NODE_ENV || 'development']

module.exports = Object.assign({
    project: 'API Boilerplate with Express.js', 
    url: 'localhost', 
    port: process.env.PORT || 3000,
    api: {
        url: 'http://github.com'
        ,db: {
            port: 12
        }
    },    
})
