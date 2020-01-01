const express = require('express')
const breweryController = require('../controller/breweryController')
const breweryRouter = express.Router()
const Brewery = require('../model/Brewery')

// Lists all breweries
// breweryRouter.get('/', breweryController.index)

// breweryRouter.get('/name/:name', function(req,res) {
// 	Brewery.find({ 'name': req.params.name }).then(name => {

// 	})
// })

module.exports = breweryRouter









// // Import your express library and your controller
// // This will allow us to access a particular method and match it to a route
// const express = require("express")
// const houseController = require("./controllers/houseController")

// // Access the express router, which comes with the library
// const houseRouter = express.Router()

// // Assign each key from my controller to a specific route
// houseRouter.get("/", houseController.index)

// module.exports = houseRouter