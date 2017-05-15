const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: 'tslint-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: 'file-loader?name=assets/img/[name].[hash].[ext]'
      },
      {
        test: /\.ico$/,
        use: 'file-loader?name=[name].[ext]'
      }
    ]
  },

  plugins: [
    new CheckerPlugin(),
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
      'process.env': Object.keys(process.env).reduce((prev, curr) => {
        prev[curr] = JSON.stringify(process.env[curr]);
        return prev;
      }, {})
    })
  ],

  performance: {
    hints: false
  }
};
