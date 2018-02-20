const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { BASENAME } = process.env;

// set defaults
const publicPath = BASENAME || '/';

module.exports = {
  entry: {
    app: './src/main',
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath,
    filename: 'assets/js/[name].[chunkhash:8].js',
  },

  module: {
    rules: [
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
