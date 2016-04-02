var path = require('path');

module.exports = {
  context: path.resolve('src/'),
  entry: ['./index'],

  output: {
    path: path.resolve('dist/'),
    publicPath: '/public/assets/',
    filename: 'app.js'
  },

  devServer: {
    contentBase: 'public',
    host: 'localhost',
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
