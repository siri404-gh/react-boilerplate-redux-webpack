const { resolve } = require('path');
const webpack = require('webpack');

const src = './src/';
const dest = './dist/';
const client = src + 'client/';
const clientJS = client + 'js/';
const clientCSS = client + 'css/';
const appName = 'index.js';
const port = process.env.PORT || 5000;
const components = clientJS + 'components/';
const input = clientJS + appName;
const output = appName;

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
    ? [input]
    : [
      'react-hot-loader/patch',
        // 'webpack-dev-server/client?http://localhost:8080/',
        // 'webpack/hot/only-dev-server',
      input
    ];

const plugins = PRODUCTION
    ? []
    : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ];

process.noDeprecation = true;

module.exports = {
  entry: entry,
  plugins: plugins,
  output: {
    filename: output,
    path: resolve(__dirname, dest),
    publicPath: dest.slice(1)
  },
  context: resolve(__dirname, '.'),
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: port,
    contentBase: resolve(__dirname, '.'),
    publicPath: dest.slice(1)
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015'] } },
      { test: /\.css$/, use: ['style-loader', 'css-loader?modules', 'postcss-loader',] },
      // {test: /bootstrap\/js\//, loader: 'imports-loader?jQuery=jquery' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
      { test: /^((?!config).)*\.js?$/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory' },
      { test: /\.(png|jpg|jpeg|gif|woff|woff2|ttf|eot)$/, loader: 'file-loader', exclude: /node_modules/ }
    ]
  }
};
