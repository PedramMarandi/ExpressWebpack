var webpack = require('webpack');
var path = require('path');
var fs = require('fs');


var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });



module.exports = {
    entry: ['babel-polyfill', './app.js'],
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'backend.js'
    },
    externals: nodeModules,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env'],
                    plugins: [require('babel-plugin-transform-object-rest-spread')]
                }
            }
        }]
    }
}