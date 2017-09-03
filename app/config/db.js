const config = {
    'development': {
        adress: 'localhost',
        username: '',
        password: '',
        port: 27017,
        name: 'marandi'
    },
    'production': {

    }, 
    'test': {

    }
}[process.env.NODE_ENV || 'development']

export default config;