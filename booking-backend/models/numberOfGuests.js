const mongoose = require('mongoose')

const numberOfGuestsSchema = new mongoose.Schema({
    adults: Number,
    children: Number,
    infants: Number
})

module.exports = mongoose.model('NumberOfGuests', numberOfGuestsSchema)