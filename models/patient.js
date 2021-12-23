const  mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: Number, required: true },
  treatments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Treatment",
    }
  ]
});

module.exports = mongoose.model.call(require('mongoose'), 'Patient', patientSchema);
