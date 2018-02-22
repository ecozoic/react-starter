const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/main',
    ],
  },

  resolve: {
    extensions: ['.jsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
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
    new StylelintWebpackPlugin(),
    // extract vendor code
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module =>
        module.context && module.context.includes('node_modules'),
    }),
    // extract polyfill code
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfill',
      minChunks: module =>
        module.context && (module.context.includes('babel-polyfill') || module.context.includes('core-js')),
    }),
    // extract webpack manifest
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
  ],

  performance: {
    hints: false,
  },
};
