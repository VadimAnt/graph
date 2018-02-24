const { DbService } = require('../../services');

module.exports = DbService.createSchema({
  userId: { type: String },
  balans: { type: String },
  title: { type: String },
});

