module.exports = require('require-all')({
	dirname: __dirname,
	filter: /(.+Repository)\.js$/,
	recursive: false,
});
