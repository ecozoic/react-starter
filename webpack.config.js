var path = require('path');

module.exports = {
  entry: {
    app: './src/index',
    vendor: [
      'es5-shim',
      'es6-shim',
      'es6-promise',
      'react',
      'react-dom',
      'react-router'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/public/assets/',
    filename: '[name].js'
  },

  devtool: 'source-map',

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
