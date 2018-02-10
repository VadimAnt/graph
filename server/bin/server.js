const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { apolloUploadExpress } = require('apollo-upload-server');
const { DbService, AuthService } = require('../app/services');
const authMiddleware = require('../app/middlewares/auth/auth');

const schema = require('../app/schema');

const dbService = new DbService();
const authService = new AuthService();

const app = express();

dbService.connect((err) => {
	throw new Error(err);
});


app.use('/test', authMiddleware.auth, (req, res) => {
	console.log('test');
});

app.use('/sign', (req, res) => {
	console.log(authService.sign({
		id: '5a76243ac48299204c63b4a6',
	}));
});

app.use('/graphql', bodyParser.json(), apolloUploadExpress(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(process.env.PORT, () => {
	process.stdout.write('Server start');
});

module.exports = app;
