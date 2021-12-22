const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Patient = require('./models/patient');
const Doctor = require('./models/doctor');
const Treatment = require('./models/treatment');

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
  console.log('delete patient');
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


app.get('/api/doctors', (req, res, next) => {
  console.log('get doctors');
  Doctor.find().then(doctors => res.status(200).json(doctors))
    .catch(error => res.status(400).json( {error}));
});

app.post('/api/doctor', jsonParser,(req, res, next) => {
  console.log('post doctors');
  const newDoctor = new Doctor({
    ...req.body
  })
  newDoctor.save()
    .then(() => res.status(201).json({ message: 'Doctor enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.delete('/api/doctor/:id', (req, res, next) => {
  console.log('delete doctor');
  Doctor.deleteOne({_id: req.params.id}).then(doctors => res.status(200).json(doctors))
    .catch(error => res.status(400).json( {error}));
});

app.patch('/api/doctor/:id', jsonParser,(req, res, next) => {
  console.log('patch doctor');
  const newDoctor = new Doctor({
    ...req.body
  })
  Doctor.findByIdAndUpdate(req.params.id, newDoctor)
    .then(() => res.status(201).json({ message: `Doctor enregistré ${newDoctor}!`}))
    .catch(error => res.status(400).json({ error }));
});



app.get('/api/treatments', (req, res, next) => {
  console.log('get treatments');
  Treatment.find().then(treatments => res.status(200).json(treatments))
    .catch(error => res.status(400).json( {error}));
});

app.post('/api/treatment', jsonParser,(req, res, next) => {
  console.log('post treatment');
  const newTreatment = new Treatment({
    ...req.body
  })
  newTreatment.save()
    .then(() => res.status(201).json({ message: 'Treatment enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.delete('/api/treatment/:id', (req, res, next) => {
  console.log('delete treatment');
  Treatment.deleteOne({_id: req.params.id}).then(treatment => res.status(200).json(treatment))
    .catch(error => res.status(400).json( {error}));
});

app.patch('/api/treatment/:id', jsonParser,(req, res, next) => {
  console.log('patch treatment');
  const newTreatment = new Treatment({
    ...req.body
  })
  Patient.findByIdAndUpdate(req.params.id, newTreatment)
    .then(() => res.status(201).json({ message: `Treatment enregistré ${newTreatment}!`}))
    .catch(error => res.status(400).json({ error }));
});
module.exports = app;
