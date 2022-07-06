import { useState, useEffect, useRef } from 'react'

import loginService from './services/login'
import userService from './services/user'
import courseService from './services/course'

import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import CourseForm from './components/CourseForm'
import { useSelector, useDispatch } from 'react-redux'
import store from './store'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { initializeCourses } from './reducers/courseReducer'
import {
    BrowserRouter as Router,
    Routes, Route, Link, useNavigate
} from "react-router-dom"
import Calendar from './components/Calendar'
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

    const edit = () => {
        console.log('edit here')
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
                <SignupForm onSignup={signup} />
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
                </div>


                <Routes>
                    <Route path="/" element={<Courses courses={courses} />} />
                    <Route path="/create" element={<CourseForm courses={courses} />} />
                    <Route path="/signup" element={<CourseForm courses={courses} />} />
                </Routes>
            </div>
        </div>
    )
}


const Menu = () => {
    const padding = {
        paddingRight: 5
    }
    return (
        < div >
            <Link style={padding} to="/">Tuntikalenteri</Link>
            <Link style={padding} to="/create">Ryhmäliikunta</Link>
            <Link style={padding} to="/signup">Rekisteröidy</Link>
        </div >
    )
}
const Courses = (props) => {
    const courses = props.courses
    return (
        <div>    <h2>courses</h2>
            <div>{courses.map((course) => (
                <div key={course.id}>
                    <b>{course.name}</b><br></br>
                    {course.description}
                </div>
            ))}
            </div>
        </div>
    )
}
export default App