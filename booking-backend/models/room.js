const mongoose = require('mongoose')
const numberOfGuests = require('./numberOfGuests')

const roomSchema = new mongoose.Schema({
    size: Number,
    numberOfGuests: numberOfGuests.schema,
    dailyPrice: Number,
      facilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Convenience'
      }],
      images: [String],
      ratings: [Number]
    })

roomSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Room', roomSchema)