const express = require('express')
const breweryController = require('../controller/breweryController')
const breweryRouter = express.Router()

breweryRouter.get('/', breweryController.index)

module.exports = breweryRouter