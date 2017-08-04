const path = require('path');
const webpack = require('webpack');

const { PORT, HOST, BASENAME } = process.env;

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
    publicPath: BASENAME,
    filename: 'assets/js/[name].js',
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
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
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
  ],

  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: 'minimal',
    compress: true,
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: BASENAME,
    port: PORT,
    host: HOST,
  },
};
