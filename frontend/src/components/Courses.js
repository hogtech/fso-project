import {
    BrowserRouter as Router,
    Routes, Route, Link, useNavigate, useParams
} from "react-router-dom"
import { useState, useEffect, useRef } from 'react'
const Courses = (props) => {
    const getThisWeeksNumber = () => {
        return Number(getWeekNumber(new Date()))
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

export default Courses