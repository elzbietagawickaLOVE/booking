const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name: String,
    adress: String,
    description: String,
    rooms: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
      },
      facilities: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facility'
      },
    comments: [String]
})

hotelSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Hotel', hotelSchema)