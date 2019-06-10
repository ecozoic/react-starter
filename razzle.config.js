const LoadablePlugin = require('@loadable/webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  modify: (config, { target, dev } /* , webpack */) => {
    if (target === 'web') {
      config.plugins.push(
        new LoadablePlugin({
          writeToDisk: true,
          filename: '../loadable-stats.json',
        }),
      );

      if (!dev) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../report.html',
          }),
        );
      }
    }

    return config;
  },
};
