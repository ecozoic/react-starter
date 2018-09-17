const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?/,
        include: [path.resolve(__dirname, '../src')],
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
};
