const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { PORT, HOST, PROXY_PORT } = process.env;

module.exports = {
  entry: {
    polyfill: './src/polyfill',
    vendor: './src/vendor.hmr',
    app: [
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/only-dev-server',
      './src/main.hmr',
    ],
  },

  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[id].chunk.js',
  },

  module: {
    rules: [
      {
        test: /\.s?(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              camelCase: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader',
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new Visualizer({
      filename: '../webpack/stats/stats.dev.html',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../webpack/stats/report.dev.html',
      defaultSizes: 'parsed',
      openAnalyzer: false,
      generateStatsFile: false,
      logLevel: 'info'
    }),
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
  },
};
