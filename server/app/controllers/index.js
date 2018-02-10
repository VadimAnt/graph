module.exports = require('require-all')({
  dirname: __dirname,
  filter: /(.+Controller)\.js$/,
  recursive: false,
  resolve: (Controller) => {
    return new Controller();
  },
});
