const router = require('express').Router()
const User = require('../models/user')
const Course = require('../models/course')
router.get('/', async (request, response) => {
    console.log('inside controller courses')
    const courses = await Course
        .find({})

    response.json(courses)
})

router.post('/', async (request, response) => {
    console.log('inside courses controller post')
    const { name, description } = request.body
    const course = new Course({
        name,
        description

    })
    const savedCourse = await course.save()
    response.status(201).json(savedCourse)
})
/* router.post('/', async (request, response) => {
    const { username, name, password } = request.body

    if (!password || password.length < 3) {
        return response.status(400).json({
            error: 'invalid password'
        })
    }

    const existingUser = await User.findOne({ username })
    if (existingUser) {
        return response.status(400).json({
            error: 'username must be unique'
        })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new User({
        username,
        name,
        passwordHash,
    })

    const savedUser = await user.save()

    response.status(201).json(savedUser)
}) */

module.exports = router