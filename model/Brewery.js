const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const BrewerySchema = new Schema({
	id: Number,
    name: String,
    brewery_type: String,
    street: String,
    city: String,
    state: String,
    postal_code: String,
    country: String,
    longitude: String,
    latitude: String,
    phone: String,
    website_url: String,
    updated_at: String,
    tag_list: Array
})

const Brewery = mongoose.model('Brewery', BrewerySchema)
module.exports = Brewery