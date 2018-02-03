module.exports = require('require-all')({
	dirname: __dirname,
	filter: /(.+Service)\.js$/,
	recursive: false,
});
