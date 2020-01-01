const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const breweryRoutes = require('./routes/breweryRoutes')
const Brewery = require('./model/Brewery')

app.use(bodyParser.json())
app.use('/', breweryRoutes)


// Create new brewery
app.post('/', (req, res) => {
	Brewery.create(req.body).then(brew => {
		res.json(brew)
	})
})


// Get all breweries
// Example: http://localhost:6969/
app.get('/', (req, res) => {
	Brewery.find({}).then(brew => {
		res.json(brew)
	})
})

// Get brewery by name
// Example: http://localhost:6969/name/Back%20Bay%20Brewing%20Company
app.get('/name/:name', (req, res) => {
	Brewery.find({ name: req.params.name }).then(brew => {
		res.json(brew)
	})
})

// Get brewery by id
// Example: http://localhost:6969/id/5e091e1336567ffd665821d9
app.get('/id/:_id', (req, res) => {
	Brewery.findById(req.params._id).then(brew => {
		res.json(brew)
	})
})



// Delete brewery by id ?
app.delete('/id/:_id', (req, res) => {
	Brewery.findOneAndDelete({ _id: req.params._id }).then(brew => {
		res.json(brew)
	})
})





app.listen(6969, () => console.log('index working'))










