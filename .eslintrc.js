module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended', 'react-app'],
  env: {
    jest: false,
  },
  overrides: [
    {
      files: ['**/*.spec.{js,jsx}'],
      env: {
        jest: true,
      },
    },
  ],
};
