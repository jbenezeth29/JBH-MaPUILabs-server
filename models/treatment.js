const mongoose = require('mongoose');

const treatmentSchema = mongoose.Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('Treatment', treatmentSchema);
