var webpackConfig = require('./webpack.config.js');
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './src/client/js/**/*.test.js'
        ],
        preprocessors: {
            './src/client/js/**/*.test.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        reporters: ['spec', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    });
};