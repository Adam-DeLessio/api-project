const Brewery = require('../model/Brewery')

module.exports = {
	index: (req, res) => {
		Brewery.find({}).then((brewery) => {
			res.json(brewery)
		})
	}
}




// //controller will relate to a specific model so you want to import that model here. Note- you can have multiple models within one controller
// const Houses = require("../models/Houses")
// module.exports = {
//     // inside each controller method, youre defining the logic of your app
//     // each 'endpoint' will contain specific instructions on what data should be displayed
//     index: (req, res) => {
//         Houses.find({}).then((houses) => {
//             res.json(houses)
//         })
//     },
//     create: (req, res) => {},
//     update: (req, res) => {},
//     delete: (req, res) => {}
// }