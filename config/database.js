const mongoose = require('mongoose');

const mongoDB = `mongodb://${process.env.MONGO_HOST}/cryptoboard-back`;

mongoose.connection.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
);

mongoose.connect(
  mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.Promise = global.Promise;

module.exports = mongoose;
