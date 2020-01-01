const express = require('express')
const cors = require('cors')
const app = express()
const breweryRoutes = require('./routes/breweryRoutes')
const Brewery = require('./model/Brewery')

// app.use('/', breweryRoutes)

app.get('/', (req, res) => {
	Brewery.find({}).then(lists => {
		res.json(lists)
	})
})


// Example: http://localhost:6969/name/Back%20Bay%20Brewing%20Company
app.get('/name/:name', (req, res) => {
	Brewery.find({ name: req.params.name }).then(lists => {
		res.json(lists)
	})
})

app.listen(6969, () => console.log('index working'))











// const express = require('express')
// const app = express()
// const houseRoutes = require('./routes')

// app.use('/', houseRoutes )

// app.listen(4000)

