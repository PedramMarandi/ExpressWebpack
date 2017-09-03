const config = {
    'development': {
        adress: 'localhost',
        username: '',
        password: '',
        port: 27017,
        name: 'default'
    },
    'production': {

    }, 
    'test': {

    }
}[process.env.NODE_ENV || 'development']

export default config;