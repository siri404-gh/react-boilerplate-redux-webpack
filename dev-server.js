var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var fs = require("fs");
var config = require('./webpack.config');
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    hot: true,
    inline: true,
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    stats: { colors: true },
});

server.listen(8080, "localhost", function() {
    console.log('Server Started..');
});