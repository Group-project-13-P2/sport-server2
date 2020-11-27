const Highlight = require('../controllers/highlightController')

const route = require('express').Router()
const highlightController = require('../controllers/highlightController.js')

app.get("/highlights", highlightController.getHighlight)

module.exports = route