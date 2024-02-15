const mongoose = require('mongoose')

const convenienceSchema = new mongoose.Schema({
    name: String,
    description: String,
    icon: String
})

convenienceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Convenience', convenienceSchema)