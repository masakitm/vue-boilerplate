const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './dist/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
};
