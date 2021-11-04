const config = Object.assign(
  {root: true},
  require('./dist/src/index').default.configs.node
);

module.exports = config;
