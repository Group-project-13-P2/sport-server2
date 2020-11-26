const routes = require('express').Router()
const JadwalPertandinganController = require('../controllers/jadwalPertandinganController')


routes.get('/next15', JadwalPertandinganController.getNext5)
routes.get('/last15', JadwalPertandinganController.getLast5)



module.exports = routes