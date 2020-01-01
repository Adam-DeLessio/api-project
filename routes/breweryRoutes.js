const express = require('express')
const breweryController = require('../controller/breweryController')
const breweryRouter = express.Router()
const Brewery = require('../model/Brewery')


breweryRouter.get('/', breweryController.index)


module.exports = breweryRouter