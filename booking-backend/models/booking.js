import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    totalPrice: Number
    });

    bookingSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            returnedObject.id = returnedObject._id.toString()
            delete returnedObject._id
            delete returnedObject.__v
        }
    })

    module.exports = mongoose.model('Booking', bookingSchema)