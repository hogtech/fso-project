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
const Course = ({ courses }) => {
    const upperc = {
        textTransform: "uppercase"
    }
    const id = useParams().id
    console.log('Course here, courses: ', courses)
    const course = courses.find(n => n.id === id)
    console.log('Course here, course: ', course)
    var startDate = new Date(course.startTime)
    var endDate = new Date(course.endTime)

    var startD = startDate.getDate()
    var startM = startDate.getMonth() + 1
    var startY = startDate.getFullYear()
    var startH = startDate.getHours()
    var startMin = endDate.getMinutes()
    startMin = (startDate.getMinutes() < 10 ? '0' : '') + startDate.getMinutes()
    var weekday = startDate.getDay()
    var endD = endDate.getDate()
    var endM = endDate.getMonth() + 1
    var endY = endDate.getFullYear()
    var endH = endDate.getHours()
    var endMin = endDate.getMinutes()
    endMin = (endDate.getMinutes() < 10 ? '0' : '') + endDate.getMinutes()

    const startTimeToDisplay = startH + ':' + startMin
    const endTimeToDisplay = endH + ':' + endMin
    const dateToDisplay = startD + "." + startM + "." + startY + "."
    /* const capitalize = (str) => {
        const lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    } */
    const getWeekDayName = (weekDayNumber) => {
        switch (weekDayNumber) {
            case 0:
                return 'Sunnuntai'
                break;
            case 1:
                return 'Maanantai'
                break;
            case 2:
                return 'Tiistai'
                break;
            case 3:
                return 'Keskiviikko'
                break
            case 4:
                return 'Torstai'
                break
            case 5:
                return 'Perjantai'
                break
            case 6:
                return 'Lauantai'
                break
            default:
                break;
        }
    }
    return (
        <div>

            <h2 style={upperc}>{course.name}</h2>
            <p>{getWeekDayName(weekday)} {dateToDisplay} {startTimeToDisplay}-{endTimeToDisplay}</p>
            <p>Ohjaaja: {course.instructor}</p>
            <p>{course.description}</p>
            <p>Varatut paikat: {course.bookedPlaces} <br></br>Paikkoja yhteensä: {course.totalPlaces}</p>
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
            <Link style={padding} to="/create">Lisää kurssi</Link>
            <Link style={padding} to="/signup">Rekisteröidy</Link>
        </div >
    )
}

const Courses = (props) => {
    const getThisWeeksNumber = () => {
        return Number(getWeekNumber(new Date()))
        return 31
    }
    const [weekNumber, setWeekNumber] = useState(getThisWeeksNumber())
    //setWeekNumber = 31
    //const [value, setValue] = useState('31');

    const handleChange = (event) => {
        //setValue(event.target.value);
        setWeekNumber(event.target.value)
    };
    let courses = props.courses

    function getWeekNumber(d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
        // Return array of year and week number
        return weekNo
    }

    //let weekNumber = 31
    const toDisplayDate = (course) => {
        let time = new Date(course.startTime)
        let d = time.getDate()
        let m = time.getMonth() + 1
        let y = time.getFullYear()
        console.log(d + '.' + m + '.' + y)
        return (d + '.' + m + '.' + y)
    }
    const toDisplayStartTime = (course) => {
        let time = new Date(course.startTime)
        let h = time.getHours()
        //let min = time.getMinutes()
        let startMin = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
        return (h + ':' + startMin)
    }
    const coursesByWeekDayMonday = courses.filter(c => new Date(c.startTime).getDay() === 1)
        .filter(c => Number(getWeekNumber(new Date(c.startTime))) === Number(weekNumber))
        .sort((a, b) => Number(new Date(a.startTime).getHours()) - Number(new Date(b.startTime).getHours()))
    const coursesByWeekDayTuesday = courses.filter(c => new Date(c.startTime).getDay() === 2)
        .filter(c => Number(getWeekNumber(new Date(c.startTime))) === Number(weekNumber))
        .sort((a, b) => Number(new Date(a.startTime).getHours()) - Number(new Date(b.startTime).getHours()))
    const coursesByWeekDayWednesday = courses.filter(c => new Date(c.startTime).getDay() === 3)
        .filter(c => Number(getWeekNumber(new Date(c.startTime))) === Number(weekNumber))
        .sort((a, b) => Number(new Date(a.startTime).getHours()) - Number(new Date(b.startTime).getHours()))
    const coursesByWeekDayThursday = courses.filter(c => new Date(c.startTime).getDay() === 4)
        .filter(c => Number(getWeekNumber(new Date(c.startTime))) === Number(weekNumber))
        .sort((a, b) => Number(new Date(a.startTime).getHours()) - Number(new Date(b.startTime).getHours()))
    const coursesByWeekDayFriday = courses.filter(c => new Date(c.startTime).getDay() === 5)
        .filter(c => Number(getWeekNumber(new Date(c.startTime))) === Number(weekNumber))
        .sort((a, b) => Number(new Date(a.startTime).getHours()) - Number(new Date(b.startTime).getHours()))
    const coursesByWeekDaySaturday = courses.filter(c => new Date(c.startTime).getDay() === 6)
        .filter(c => Number(getWeekNumber(new Date(c.startTime))) === Number(weekNumber))
        .sort((a, b) => Number(new Date(a.startTime).getHours()) - Number(new Date(b.startTime).getHours()))
    const coursesByWeekDaySunday = courses.filter(c => new Date(c.startTime).getDay() === 0)
        .filter(c => Number(getWeekNumber(new Date(c.startTime))) === Number(weekNumber))
        .sort((a, b) => Number(new Date(a.startTime).getHours()) - Number(new Date(b.startTime).getHours()))

    console.log('coursesByWeekDayMonday: ', coursesByWeekDayMonday)

    const isThisWeek = (weekNumberToTry) => {
        if (weekNumberToTry === getThisWeeksNumber(new Date())) {
            return ' (Nyt)'
        } else {
            return ''
        }
    }

    const options = [
        { label: '30 / 2022' + isThisWeek(30), value: 30 },
        { label: '31 / 2022' + isThisWeek(31), value: 31 },
        { label: '32 / 2022' + isThisWeek(32), value: 32 },
        { label: '33 / 2022' + isThisWeek(33), value: 33 },
        { label: '34 / 2022' + isThisWeek(34), value: 34 },
        { label: '35 / 2022' + isThisWeek(35), value: 35 },
    ];


    return (
        <div>
            <label>
                Valitse viikko
                <select value={weekNumber} onChange={handleChange}>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
            <h2>Tunnit</h2>
            <h4>Maanantai</h4>
            <div>{coursesByWeekDayMonday.map((course) => (
                <div key={course.id}>
                    <b>{toDisplayDate(course)} {toDisplayStartTime(course)} <Link to={`/courses/${course.id}`}>{course.name}</Link> {course.bookedPlaces}/{course.totalPlaces}</b><br></br>

                </div>
            ))}
            </div>
            <h4>Tiistai</h4>
            <div>{coursesByWeekDayTuesday.map((course) => (
                <div key={course.id}>
                    <b>{toDisplayDate(course)} {toDisplayStartTime(course)} <Link to={`/courses/${course.id}`}>{course.name}</Link> {course.bookedPlaces}/{course.totalPlaces}</b><br></br>

                </div>
            ))}
            </div>
            <h4>Keskiviikko</h4>
            <div>{coursesByWeekDayWednesday.map((course) => (
                <div key={course.id}>
                    <b>{toDisplayDate(course)}  {toDisplayStartTime(course)} <Link to={`/courses/${course.id}`}>{course.name}</Link> {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                </div>
            ))}
            </div>
            <h4>Torstai</h4>
            <div>{coursesByWeekDayThursday.map((course) => (
                <div key={course.id}>
                    <b>{toDisplayDate(course)}  {toDisplayStartTime(course)} <Link to={`/courses/${course.id}`}>{course.name}</Link> {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                </div>
            ))}
            </div>
            <h4>Perjantai</h4>
            <div>{coursesByWeekDayFriday.map((course) => (
                <div key={course.id}>
                    <b>{toDisplayDate(course)} {toDisplayStartTime(course)} <Link to={`/courses/${course.id}`}>{course.name}</Link> {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                </div>
            ))}
            </div>
            <h4>Lauantai</h4>
            <div>{coursesByWeekDaySaturday.map((course) => (
                <div key={course.id}>
                    <b>{toDisplayDate(course)} {toDisplayStartTime(course)} <Link to={`/courses/${course.id}`}>{course.name}</Link>  {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                </div>
            ))}
            </div>
            <h4>Sunnuntai</h4>
            <div>{coursesByWeekDaySunday.map((course) => (
                <div key={course.id}>
                    <b>{toDisplayDate(course)} {toDisplayStartTime(course)} <Link to={`/courses/${course.id}`}>{course.name}</Link> {course.bookedPlaces}/{course.totalPlaces}</b><br></br>
                </div>
            ))}
            </div>
        </div>
    )
}
export default App