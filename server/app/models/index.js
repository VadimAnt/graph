module.exports = require('require-all')({
  dirname: __dirname,
  filter: /(.+model)\.js$/,
  recursive: false,
});
