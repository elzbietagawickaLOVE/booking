const mongoose = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    passwordHash: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    bookings: [{
        type: Schema.Types.ObjectId,
        ref: 'Booking'
    }]
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
});

module.exports = mongoose.model('User', userSchema);
