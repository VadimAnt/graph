module.exports = require('require-all')({
	dirname: __dirname,
	filter: /(.+Middleware)\.js$/,
	recursive: true,
});
