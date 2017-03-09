const path = require('path');
const webpack = require('webpack');
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

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new Visualizer({
      filename: '../webpack/stats/stats.prod.html'
    })
  ]
};
