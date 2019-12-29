const mongoose = require('./connection')

// This will need to change to actually import data from brewery api
const data = require('./breweries.json')

const Brewery = require('../model/Brewery')

Brewery.deleteMany({}).then(() => {
	Brewery
		.create(data).then((returnData) => {
			console.log(returnData)
			process.exit()
		})
		.catch((err) => {
			console.log("it didn't work")
		})
})