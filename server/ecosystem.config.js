module.exports = {
	apps : [
		{
			name: "Graph",
			script: "./bin/server.js",
			watch: true,
			env: {
				"PORT": 3000,
				"NODE_ENV": "development",
				"DB_DSN": "",
				"DB_HOST": "ds121118.mlab.com",
				"DB_PORT": 21118,
				"DB_NAME": "graph",
				"DB_USER": "graph_user",
				"DB_PASS": "1234567890"
			},
		}
	]
};
