module.exports = function(api) {
  const env = api.env();

  return {
    presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  };
};
