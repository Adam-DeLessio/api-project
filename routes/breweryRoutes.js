const express = require('express')
const breweryController = require('../controller/breweryController')
const breweryRouter = express.Router()

breweryRouter.get('/', breweryController.index)

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