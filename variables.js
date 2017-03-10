var src = './src/';
var dest = './dist/';
var client = src + 'client/';
var clientJS = client + 'js/';
var clientCSS = client + 'css/';
var components = clientJS + 'components/';

var appName = 'index.js';
var port = process.env.PORT || 5000;

module.exports = {
    src: src,
    dest: dest,
    client: client,
    input: clientJS + appName,
    output: appName,
    clientVars : {
        port: port
    },
    serverVars: {
        port: port
    },
};