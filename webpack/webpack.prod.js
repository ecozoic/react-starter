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
    filename: 'assets/[name].[hash].js',
    chunkFilename: 'assets/[id].[hash].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?importLoaders=2&minimize&modules&camelCase!postcss-loader!sass-loader'
        })
      }
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
      filename: 'assets/[name].[hash].css'
    }),
    new Visualizer({
      filename: '../webpack/stats/stats.prod.html'
    })
  ]
};
