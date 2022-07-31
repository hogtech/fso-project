import {
    BrowserRouter as Router,
    Routes, Route, Link, useNavigate, useParams
} from "react-router-dom"
import { Button } from 'react-bootstrap'
import courseService from '../services/course'
import { useEffect, useState } from "react"

const Course = ({ courses }) => {
    useEffect(() => {
        setCourse(courses.find(n => n.id === id))
    }, [])
    const [course, setCourse] = useState('')
    const upperc = {
        textTransform: "uppercase"
    }
    const id = useParams().id
    //console.log('Course here, courses: ', courses)
    //let course = courses.find(n => n.id === id)


    console.log('Course here, course: ', course)
    var startDate = new Date(course.startTime)
    var endDate = new Date(course.endTime)
    const handleClick = async () => {
        console.log('booked places: ', course.bookedPlaces)
        console.log('total places: ', course.totalPlaces)
        console.log('booked < total', course.bookedPlaces < course.totalPlaces)
        if (course.bookedPlaces < course.totalPlaces) {
            try {
                await courseService.bookCourse(course)
            } catch (error) {
                console.log('courseService error: ', error)
            }
            setCourse({ ...course, bookedPlaces: course.bookedPlaces + 1 })
        }
        //courseService.bookCourse(course)
        //console.log('courseService.bookCourse(course): ', course);

    }
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

            <h2 key={course.id} style={upperc}>{course.name}</h2>
            <p>{getWeekDayName(weekday)} {dateToDisplay} {startTimeToDisplay}-{endTimeToDisplay}</p>
            <p>Ohjaaja: {course.instructor}</p>
            <p>{course.description}</p>
            <p>Varatut paikat: {course.bookedPlaces} <br></br>Paikkoja yhteensä: {course.totalPlaces}</p>
            <p>Sinulla on varauksia tälle tunnille 0 kpl</p>
            <Button onClick={(handleClick)}>Varaa</Button>
        </div>
    )
}

export default Course