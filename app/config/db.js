const config = {
    'development': {
        adress: 'localhost',
        username: '',
        password: '',
        port: 27017,
        name: 'marandi'
    },
    'production': {
        adress: 'localhost',
        username: '',
        password: '',
        port: 27017,
        name: 'marandi'
    },
    'test': {

    }
}[process.env.NODE_ENV || 'development']

export default config;