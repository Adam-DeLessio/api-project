const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const breweryRoutes = require('./routes/breweryRoutes')
const Brewery = require('./model/Brewery')

app.use(parser.json())

app.get('/', (req, res) => {
	Brewery.find({}).then(list => {
		res.json(list)
	})
})

// Example: http://localhost:6969/name/Back%20Bay%20Brewing%20Company
app.get('/name/:name', (req, res) => {
	Brewery.find({ name: req.params.name }).then(list => {
		res.json(list)
	})
})

// Example: http://localhost:6969/id/7131
app.get('/id/:id', (req, res) => {
	Brewery.find({ id: req.params.id }).then(list => {
		res.json(list)
	})
})


// Creating data in API
app.post('/', (req, res) => {
	Brewery.create(req.body).then(list => {
		res.json(list)
	})
})






app.listen(6969, () => console.log('index working'))










