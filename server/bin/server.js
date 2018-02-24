const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { apolloUploadExpress } = require('apollo-upload-server');
const { DbService } = require('../app/services');

const schema = require('../app/schema');

const dbService = new DbService();

const app = express();

dbService.connect((err) => {
  throw new Error(err);
});

app.use(cors());
app.use('/graphql', bodyParser.json(), apolloUploadExpress(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(process.env.PORT, () => {
  process.stdout.write('Server start');
});

module.exports = app;
