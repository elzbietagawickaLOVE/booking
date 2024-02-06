import mongoose from 'mongoose'

const numberOfGuestsSchema = new mongoose.Schema({
    adults: Number,
    children: Number,
    infants: Number
})

exports.numberOfGuestsSchema = numberOfGuestsSchema