const Brewery = require('../model/Brewery')

module.exports = {
	index: (req, res) => {
		Brewery.find({}).then((brewery) => {
			res.json(brewery)
		})
	}
}