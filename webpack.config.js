var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
   entry: [
     './client/index'
   ],
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
    publicPath: '/client/dist/'
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};
