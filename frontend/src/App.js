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
    Routes, Route, Link, useNavigate, useParams
} from "react-router-dom"
import Calendar from './components/Calendar'
import './index.css'

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
                    <Route path="/create" element={<CourseForm courses={courses} />} />
                    <Route path="/courses/:id" element={<Course courses={courses} />} />
                    <Route path="/signup" element={<SignupForm onSignup={signup} />} />
                </Routes>
            </div>
        </div>
    )
}
const Course = ({ courses }) => {
    const upperc = {
        textTransform: "uppercase"
    }
    const id = useParams().id
    console.log('Course here, courses: ', courses)
    const course = courses.find(n => n.id === id)
    console.log('Course here, course: ', course)
    var date = new Date(course.date)
    var d = date.getDate()
    var m = date.getMonth() + 1
    var y = date.getFullYear()
    const dateToDisplay = d + "." + m + "." + y + "."
    const capitalize = (str) => {
        const lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div>
            <p>{dateToDisplay}</p>
            <h2 style={upperc}>{course.name}</h2>
            <p>{capitalize(course.weekday)} {dateToDisplay} {course.startTime}-{course.endTime}</p>
            <p>Ohjaaja: {course.instructor}</p>
            <p>{course.description}</p>
            <p>Varatut paikat: {course.bookedPlaces} <br></br>Paikkoja yhteensä: {course.totalPlaces}</p>
            <LoginForm></LoginForm>
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
    let coursesByWeekDayMonday = courses.filter(c => c.weekday === 'maanantai')
        .sort((a, b) => Number(a.startTime.slice(0, 2)) - Number(b.startTime.slice(0, 2)))
    const coursesByWeekDayTuesday = courses.filter(c => c.weekday === 'tiistai')
        .sort((a, b) => Number(a.startTime.slice(0, 2)) - Number(b.startTime.slice(0, 2)))
    let coursesByWeekDayWednesday = courses.filter(c => c.weekday === 'keskiviikko')
        .sort((a, b) => Number(a.startTime.slice(0, 2)) - Number(b.startTime.slice(0, 2)))
    const coursesByWeekDayThursday = courses.filter(c => c.weekday === 'torstai')
        .sort((a, b) => Number(a.startTime.slice(0, 2)) - Number(b.startTime.slice(0, 2)))
    const coursesByWeekDayFriday = courses.filter(c => c.weekday === 'perjantai')
        .sort((a, b) => Number(a.startTime.slice(0, 2)) - Number(b.startTime.slice(0, 2)))
    const coursesByWeekDaySaturday = courses.filter(c => c.weekday === 'lauantai')
        .sort((a, b) => Number(a.startTime.slice(0, 2)) - Number(b.startTime.slice(0, 2)))
    const coursesByWeekDaySunday = courses.filter(c => c.weekday === 'sunnuntai')
        .sort((a, b) => Number(a.startTime.slice(0, 2)) - Number(b.startTime.slice(0, 2)))

    console.log('coursesByWeekDayWednesday: ', coursesByWeekDayWednesday);
    return (
        <div>
            <h2>Tunnit</h2>
            <h4>Maanantai</h4>
            <div>{coursesByWeekDayMonday.map((course) => (
                <div key={course.id}>
                    <b>{course.startTime} <Link to={`/courses/${course.id}`}>{course.name}</Link> {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                    {course.description}
                </div>
            ))}
            </div>
            <h4>Tiistai</h4>
            <div>{coursesByWeekDayTuesday.map((course) => (
                <div key={course.id}>
                    <b>{course.startTime} {course.name} {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                    {course.description}
                </div>
            ))}
            </div>
            <h4>Keskiviikko</h4>
            <div>{coursesByWeekDayWednesday.map((course) => (
                <div key={course.id}>
                    <b>{course.startTime} {course.name} {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                    {course.description}
                </div>
            ))}
            </div>
            <h4>Torstai</h4>
            <div>{coursesByWeekDayThursday.map((course) => (
                <div key={course.id}>
                    <b>{course.startTime} {course.name} {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                    {course.description}
                </div>
            ))}
            </div>
            <h4>Perjantai</h4>
            <div>{coursesByWeekDayFriday.map((course) => (
                <div key={course.id}>
                    <b>{course.startTime} {course.name} {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                    {course.description}
                </div>
            ))}
            </div>
            <h4>Lauantai</h4>
            <div>{coursesByWeekDaySaturday.map((course) => (
                <div key={course.id}>
                    <b>{course.startTime} {course.name} {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                    {course.description}
                </div>
            ))}
            </div>
            <h4>Sunnuntai</h4>
            <div>{coursesByWeekDaySunday.map((course) => (
                <div key={course.id}>
                    <b>{course.startTime} {course.name} {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                    {course.description}
                </div>
            ))}
            </div>
        </div>
    )
}
export default App