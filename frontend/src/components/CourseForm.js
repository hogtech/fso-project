import { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../index.css'
import createNew from '../services/course.js'

const LoginForm = ({ onEdit }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [weekday, setWeekDay] = useState('')
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [instructor, setInstructor] = useState('')
    const [bookedPlaces, setBookedPlaces] = useState('')
    const [totalPlaces, setTotalPlaces] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onEdit(
            name,
            description,
            weekday,
            startTime,
            endTime,
            instructor,
            bookedPlaces,
            totalPlaces)
        /* createNew(
            name,
            description,
            weekday,
            startTime,
            endTime,
            instructor,
            bookedPlaces,
            totalPlaces
        ) */

    }
    const style = {
        color: '333333'
    }

    return (
        <div className='edit'>
            <h2>Lisää kurssi</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    Kurssin nimi &nbsp;
                    <input
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        id='name'
                    />
                </div>
                <div>
                    Viikonpäivä
                    <input
                        type='text'
                        value={weekday}
                        onChange={({ target }) => setWeekDay(target.value)}
                        id='weekday'
                    />
                </div>
                {/* <div>
                    Päivämäärä
                    <input
                        type='date'
                        value={date}
                        onChange={({ target }) => setDate(target.value)}
                        id='date'
                    />
                </div> */}
                <div>
                    Aloitusaika
                    <input
                        type='datetime-local'
                        value={startTime}
                        onChange={({ target }) => setStartTime(target.value)}
                        id='start-time'
                    />
                </div>
                <div>
                    Lopetusaika
                    <input
                        type='datetime-local'
                        value={endTime}
                        onChange={({ target }) => setEndTime(target.value)}
                        id='end-time'
                    />
                </div>
                <div>
                    Ohjaaja
                    <input
                        type='text'
                        value={instructor}
                        onChange={({ target }) => setInstructor(target.value)}
                        id='instructor'
                    />
                </div>
                <div>
                    bookedPlaces
                    <input
                        type='text'
                        value={0}
                        onChange={({ target }) => setBookedPlaces(target.value)}
                        id='booked-places'
                    />
                </div>
                <div>
                    totalPlaces
                    <input
                        type='number'
                        value={totalPlaces}
                        onChange={({ target }) => setTotalPlaces(target.value)}
                        id='total-places'
                    />
                </div>
                <div>
                    Kurssin kuvaus &nbsp;
                    <input
                        type="text"
                        value={description}
                        onChange={({ target }) => setDescription(target.value)}
                        id="description"
                    />
                </div>
                <Button variant='info' id="login-button" type="submit">
                    luo kurssi
                </Button>
            </form>
        </div>

    )
}

export default LoginForm