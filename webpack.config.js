const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill', './modules/tictactoe/resetter.js',
    
  ],
  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: './public/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "modules"),
        ],
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015'],
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};