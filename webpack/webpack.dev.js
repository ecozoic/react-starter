const path = require('path');
const webpack = require('webpack');

const port = 8080;

module.exports = {
  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: `http://localhost:${port}`,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    compress: true,
    port
  }
};
