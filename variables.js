var src = './src/';
var dest = './dist/';
var client = src + 'client/';
var clientJS = client + 'js/';
var clientCSS = client + 'css/';
var components = clientJS + 'components/';

var appName = 'app.js';
var sourceMapsFolderName = 'map';
var port = process.env.PORT || 5000;

module.exports = {
  src: src,
  dest: dest,
  client: client,
  watchFolder: src +'**/*.*',
  browserifyInput: clientJS + appName,
  browserifyOutput: appName,
  sourceMapsFolder: sourceMapsFolderName,
  docsTask: './node_modules/.bin/jsdoc '+ components +' -c ./jsdoc.conf.json -r',
  lessSource: clientCSS + 'style.less',
  lessDest: dest+'css',
  clientVars : {
  },
  serverVars: {
    port: port
  },
};