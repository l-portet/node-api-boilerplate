const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
  sampleProperty: {
    type: String,
    trim: true,
    required: true
  }
});

SampleSchema.pre('save', function(next) {
  // Handle pre-save hook with actions like hashing pass
  next();
});

module.exports = mongoose.model('Sample', SampleSchema);
