const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  speciality: { type: String, required: true },
});

module.exports = mongoose.model('Doctor', doctorSchema);
