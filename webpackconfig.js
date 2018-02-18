module.exports = {
  entry: './modules/resetter.js',
  output: {
    filename: './public/js/bundle.js'
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
          /(routes)/
        ],
        loader: ['babel'],
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};