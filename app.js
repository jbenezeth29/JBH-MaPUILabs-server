const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Patient = require('./models/patient');
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

mongoose.connect('mongodb://localhost:27017/MaPUILabsDB')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.get('/api/patients', (req, res, next) => {
  console.log('get patients');
  Patient.find().then(patients => res.status(200).json(patients))
    .catch(error => res.status(400).json( {error}));
});

app.post('/api/patient', jsonParser,(req, res, next) => {
  console.log('post patient');
  const newPatient = new Patient({
    ...req.body
  })
  newPatient.save()
    .then(() => res.status(201).json({ message: 'Patient enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});
app.delete('/api/patient/:id', (req, res, next) => {
  console.log('delete patients');
  Patient.deleteOne({_id: req.params.id}).then(patients => res.status(200).json(patients))
    .catch(error => res.status(400).json( {error}));
});
app.patch('/api/patient/:id', jsonParser,(req, res, next) => {
  console.log('patch patient');
  const newPatient = new Patient({
    ...req.body
  })
  Patient.findByIdAndUpdate(req.params.id, newPatient)
    .then(() => res.status(201).json({ message: `Patient enregistré ${newPatient}!`}))
    .catch(error => res.status(400).json({ error }));
});
module.exports = app;
