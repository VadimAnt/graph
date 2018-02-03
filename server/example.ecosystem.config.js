module.exports = {
	apps: [
		{
			name: 'Graph',
			script: './bin/server.js',
			watch: true,
			env: {
				PORT: 3000,
				NODE_ENV: 'development',
				DB_HOST: '',
				DB_PORT: '',
				DB_NAME: '',
				DB_USER: '',
				DB_PASS: '',
			},
		},
	],
};
