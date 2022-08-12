const router = require('express').Router()
const Course = require('../models/course')
router.get('/', async (request, response) => {
  console.log('inside controller courses')
  const courses = await Course
    .find({})

  response.json(courses)
})

router.post('/', async (request, response) => {
  console.log('inside courses controller post')
  const { name, startTime, endTime, instructor, bookedPlaces, totalPlaces, description } = request.body
  const course = new Course({
    name,
    startTime,
    endTime,
    instructor,
    bookedPlaces,
    totalPlaces,
    description

  })
  const savedCourse = await course.save()
  response.status(201).json(savedCourse)
})

router.delete('/:id', async (request, response) => {
  console.log('inside courses/delete')
  const courseToDelete = await Course.findById(request.params.id)
  if (!courseToDelete) {
    return response.status(204).end()
  }

  await Course.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

router.put('/:id', async (request, response) => {
  console.log('backend put request.body: ', request.body)
  const course = request.body

  const updatedCourse = await Course
    .findByIdAndUpdate(
      request.params.id,
      course,
      { new: true, runValidators: true, context: 'query' }
    )

  response.json(updatedCourse)
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