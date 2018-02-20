const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { BASENAME } = process.env;

// set defaults
const publicPath = BASENAME || '/';

module.exports = {
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath,
    filename: 'assets/js/[name].[chunkhash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true,
              },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      allChunks: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../dist/report.html',
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: false,
      logLevel: 'info',
    }),
  ],
};
