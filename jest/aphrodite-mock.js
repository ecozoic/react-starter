const idObj = require('identity-obj-proxy');

const StyleSheet = {
  create: () => idObj,
};

const css = (...args) => args.filter(a => !!a).join('-');

module.exports = {
  StyleSheet,
  css,
};
