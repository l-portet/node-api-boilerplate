const mongoose = require('mongoose');

const mongoDB = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`;

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
