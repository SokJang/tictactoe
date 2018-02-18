import webpack from 'webpack';
// look into webpack config for es6 modules
// https://stackoverflow.com/questions/31903692/how-can-i-use-es6-in-webpack-config-js
module.exports = {
  entry: './modules/resetter.js',
  output: {
    filename: './public/js/bundleWP.js'
  },
  exclude: {
  	filename: [
  	  '.node_modules/*',
  	  '.public/*'
  	]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          /(node_modules)/,
          /(routes)/,
          /(public)/
        ],
        loader: ['babel'],
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};