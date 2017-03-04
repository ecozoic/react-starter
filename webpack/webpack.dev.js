const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

const port = 8080;

module.exports = {
  entry: {
    polyfill: './src/client/polyfill',
    vendor: './src/client/vendor',
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      './src/client/main.hmr'
    ]
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/[name].js',
    chunkFilename: 'assets/[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=2&camelCase',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new Visualizer({
      filename: '../webpack/stats/stats.dev.html'
    })
  ],

  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: 'minimal',
    compress: true,
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    port,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
};
