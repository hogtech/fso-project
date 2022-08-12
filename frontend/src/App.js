import { useState, useEffect } from 'react'

import loginService from './services/login'
import userService from './services/user'
import courseService from './services/course'

import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import CourseForm from './components/CourseForm'
import Course from './components/Course'
import Courses from './components/Courses'
import Menu from './components/Menu'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { initializeCourses } from './reducers/courseReducer'
import {
  Routes, Route,
} from 'react-router-dom'
import './index.css'
import * as React from 'react'

const App = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState(null)

  //const [courses, setCourses] = useState(null)
  const courses = useSelector(state => state.courses)

  //const courses = useSelector(state => state.courses)
  useEffect(() => {
    const userFromStorage = userService.getUser()
    if (userFromStorage) {
      setUser(userFromStorage)
    }
  }, [])

  useEffect(() => {
    dispatch(initializeCourses())
    //getCourses()
  }, [dispatch])


  const login = async (username, password) => {
    loginService.login({
      username, password,
    }).then(user => {

      setUser(user)
      userService.setUser(user)
    }).catch(() => {
      console.log('user: ', user)
      console.log(userService.setUser)
      console.log('wrong username/password', 'alert')
    })
  }


  const signup = async (username, name, password) => {
    try {
      await userService.signup({ username, name, password })
    } catch (error) {
      console.log('signup error: ', error)
    }
  }

  const createCourse = async (
    name,
    startTime,
    endTime,
    instructor,
    totalPlaces,
    description
  ) => {
    console.log('createCourse here, description: ', description)
    try {
      await courseService.createNew({
        name,
        startTime,
        endTime,
        instructor,
        totalPlaces,
        description
      })
    } catch (error) {
      console.log('crateCourse error: ', error)
    }
  }
  const logout = () => {
    setUser(null)
    userService.clearUser()
    console.log('good bye!')
  }

  if (user === null) {
    return (
      <div className='container'>
        <LoginForm onLogin={login} />
      </div>
    )
  }

  return (
    <div>
      <Menu />
      <div className='container'>
        <div>
          {user.name} logged in&nbsp;
          <Button variant='info' onClick={logout}>logout</Button>
          <br></br>
          <br></br>
        </div>


        <Routes>
          <Route path="/" element={<Courses courses={courses} />} />
          <Route path="/create" element={<CourseForm onCreate={createCourse} courses={courses} />} />
          <Route path="/courses/:id" element={<Course courses={courses} />} />
          <Route path="/signup" element={<SignupForm onSignup={signup} />} />
        </Routes>
      </div>
    </div>
  )
}
export default App