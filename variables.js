module.exports = {
  src: 'src',
  dest: 'dist',
  watchFolder: './'+ this.src +'/**/*.*',
  browserifyInput: './'+ this.src +'/client/js/app.js',
  browserifyOutput: 'app.js',
  sourceMapsFolder: 'map',
  docsTask: './node_modules/.bin/jsdoc ./'+ this.src +'/client/js/components/ -c ./jsdoc.conf.json -r',
  lessSource: './'+ lessSource +'/client/css/style.less',
  lessDest: this.dest+'/css',
  clientVars : {
  },
  serverVars: {
    port: 5000
  },
};