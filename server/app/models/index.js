module.exports = require('require-all')({
	dirname: __dirname,
	filter: /(.+Model)\.js$/,
	recursive: false,
});
