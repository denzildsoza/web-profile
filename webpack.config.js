const path = require('path');

module.exports = {
  entry: './app.js',
  experiments: {
    outputModule: true,
  },
  output: {
    module: true,
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};