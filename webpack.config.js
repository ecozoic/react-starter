const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    __PRODUCTION__: process.env.NODE_ENV === 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].bundle.js'),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    minify: false,
  }),
  new SassLintPlugin({
    glob: 'src/**/*.scss',
  }),
];

const devPlugins = [];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    compress: {
      warnings: false,
    },
  }),
];

const plugins = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);

module.exports = {
  entry: {
    app: './src/index',
    vendor: [
      'es5-shim',
      'es6-shim',
      'es6-promise',
      'react',
      'react-dom',
      'react-router',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: 'source-map',

  devServer: {
    host: 'localhost',
    port: 8080,
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!sass',
      },
    ],
  },

  plugins: plugins,

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  postcss: function postcssInit() {
    return [
      require('postcss-cssnext'),
    ];
  },
};
