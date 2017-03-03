var variables = require('./variables');
const path = require('path');
module.exports = {
  entry: variables.browserifyInput,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: variables.browserifyOutput
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  }
};