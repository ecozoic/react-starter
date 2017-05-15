const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

const { PORT, HOST, PROXY_PORT } = process.env;

module.exports = {
  entry: {
    polyfill: './src/client/polyfill',
    vendor: './src/client/vendor',
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      './src/client/main.hmr'
    ]
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=2&camelCase&localIdentName=[name]__[local]--[hash:base64:5]',
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
    port: PORT,
    host: HOST,
    proxy: {
      '/api': `http://${HOST}:${PROXY_PORT}`
    }
  }
};
