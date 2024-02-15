const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const hotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    locationUrl: String,
    description: String,
    rooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
      }],
      facilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility'
      }],
    comments: [String],
    ratings: [Number]
})

hotelSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

hotelSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Hotel', hotelSchema)