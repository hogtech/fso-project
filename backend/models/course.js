const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    weekday: {
        type: String,
        required: true,
        minlength: 3,
    },
    date: {
        type: Date,
    },
    startTime: {
        type: String,
        required: true,
        minlength: 3,
    },
    endTime: {
        type: String,
        required: true,
        minlength: 3,
    },
    instructor: {
        type: String,
        required: true,
        minlength: 3
    },
    bookedPlaces: {
        type: Number,
        default: 0,
    },
    totalPlaces: {
        type: Number,
        required: true,
    },
    description: {
        String,

    }
})

schema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // the passwordHash should not be revealed
        delete returnedObject.passwordHash
    }
})

const Course = mongoose.model('Course', schema)

module.exports = Course