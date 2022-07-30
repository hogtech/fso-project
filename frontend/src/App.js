import { useState, useEffect, useRef } from 'react'

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
import store from './store'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { initializeCourses } from './reducers/courseReducer'
import {
    BrowserRouter as Router,
    Routes, Route, Link, useNavigate, useParams
} from "react-router-dom"
import './index.css'
import * as React from 'react';

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

    const getCourses = async () => {
        console.log('inside getCourses, course: ', courses)
        const allCourses = await courseService.getAll()
        //setCourses(allCourses)
        console.log('this should be 3 objects, allCourses: ', allCourses)
        console.log('this should also be 3 objects, courses: ', courses)
        console.log('inside getCourses');
        /*  courseService.getAll()
             .then(courses => {
                 setCourses(courses)
                 console.log('getCourses courses: ', courses);
             })
             .catch((e) => {
                 console.log('getCourses error: ', e);
             }) */
    }
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