import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
    size: Number,
    numberOfGuests: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NumberOfGuests'
      },
    dailyPrice: Number,
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
      },
      facilities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Convenience'
      }]

    })

    module.exports = mongoose.model('Room', roomSchema)