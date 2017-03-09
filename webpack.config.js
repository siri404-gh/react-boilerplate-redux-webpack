var variables = require('./variables');
const path = require('path');
const webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION 
    ? [ variables.browserifyInput ]
    : [
        variables.browserifyInput,
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ];

const plugins = PRODUCTION
    ? []
    : [ new webpack.HotModuleReplacementPlugin() ];

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, variables.dest),
        publicPath: variables.dest.slice(1),
        filename: variables.browserifyOutput
    },
    plugins: plugins,
    module: {
        rules: [{
            test: /\.(js|jsx)$/, 
            use: 'babel-loader'
        }]
    }
};