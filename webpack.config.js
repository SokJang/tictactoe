const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    tictactoe: path.join(__dirname, 'modules/tictactoe/tictactoe.js')
  },
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [ /modules/ ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  }
}