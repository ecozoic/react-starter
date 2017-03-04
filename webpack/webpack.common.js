const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.jsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: 'file-loader?name=assets/images/[name].[hash].[ext]'
      },
      {
        test: /\.ico$/,
        use: 'file-loader?name=[name].[ext]'
      }
    ]
  },

  plugins: [
    new SassLintPlugin({
      glob: 'src/client/**/*.s?(a|c)ss'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfill']
    }),
    new HtmlWebpackPlugin({
      template: 'src/client/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'APP_NAME': JSON.stringify(process.env.APP_NAME)
      }
    })
  ],

  performance: {
    hints: false
  }
};
