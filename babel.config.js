module.exports = function(api) {
  const env = api.env();

  // TODO: configure env based on browsers/polyfills
  // TODO: disable modules so webpack can tree-shake
  // TODO: ensure modules still transformed when running jest
  // TODO: lodash

  return {
    presets: ['@babel/env', '@babel/typescript', '@babel/react'],
    plugins: ['styled-components', 'react-hot-loader/babel'],
  };
};
