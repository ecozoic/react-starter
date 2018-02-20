const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  module: {
    rules: [
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
    }),
    new webpack.DefinePlugin({
      'process.env': Object.keys(process.env).reduce((prev, curr) => {
        // eslint-disable-next-line no-param-reassign
        prev[curr] = JSON.stringify(process.env[curr]);
        return prev;
      }, {}),
    }),
  ],

  performance: {
    hints: false,
  },
};
