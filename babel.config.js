module.exports = function(api) {
  const env = api.env();

  // TODO: configure env based on browsers (browserslistrc)
  // TODO: polyfills
  // TODO: stage-x plugins/presets

  return {
    presets: [
      ['@babel/env', { modules: env === 'test' ? 'commonjs' : false }],
      '@babel/typescript',
      '@babel/react',
    ],
    plugins: [
      'styled-components',
      env === 'test' ? false : 'lodash',
      'react-hot-loader/babel',
    ].filter(Boolean),
  };
};
