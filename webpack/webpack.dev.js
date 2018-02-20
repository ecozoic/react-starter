const path = require('path');
const webpack = require('webpack');

const { PORT, HOST, BASENAME } = process.env;

// set defaults
const port = +PORT || 8080;
const host = HOST || 'localhost';
const publicPath = BASENAME || '/';

module.exports = {
  entry: {
    app: './src/main',
  },

  devtool: 'eval',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath,
    filename: 'assets/js/[name].js',
  },

  module: {
    rules: [
    ],
  },

  plugins: [
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    publicPath,
    port,
    host,
  },
};
