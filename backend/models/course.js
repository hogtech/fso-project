const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
    instructor: {
        type: String,
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

    },
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