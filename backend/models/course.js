const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,

        minlength: 3,
    },
    startTime: {
        type: String,

        minlength: 3,
    },
    endTime: {
        type: String,

        minlength: 3,
    },
    instructor: {
        type: String,

        minlength: 3
    },
    bookedPlaces: {
        type: Number,
        default: 0,
    },
    totalPlaces: {
        type: Number,

    },
    description: {
        type: String,

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