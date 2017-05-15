const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  entry: {
    polyfill: './src/client/polyfill',
    vendor: './src/client/vendor',
    app: './src/client/main'
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].[hash].js',
    chunkFilename: 'assets/js/[id].[hash].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=2&camelCase&localIdentName=[name]__[local]--[hash:base64:5]&minimize!postcss-loader!sass-loader',
        })
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader?useCache'
      },
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/[name].[hash].css'
    }),
    new Visualizer({
      filename: '../webpack/stats/stats.prod.html'
    })
  ]
};
