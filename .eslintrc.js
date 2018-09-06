module.exports = {
  root: true,
  extends: [
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
