import { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../index.css'

const LoginForm = ({ onCreate }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [instructor, setInstructor] = useState('')
  const [totalPlaces, setTotalPlaces] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onCreate(
      name,
      startTime,
      endTime,
      instructor,
      totalPlaces,
      description)
  }

  return (
    <div className='edit'>
      <h2>Lisää kurssi</h2>

      <form onSubmit={handleSubmit}>
        <div>Kurssin nimi &nbsp;
          <input
            type='text'
            value={name}
            onChange={({ target }) => setName(target.value)}
            id='name'
          />
        </div>

        <div>Aloitusaika
          <input
            type='datetime-local'
            value={startTime}
            onChange={({ target }) => setStartTime(target.value)}
            id='start-time'
          />
        </div>
        <div>Lopetusaika
          <input
            type='datetime-local'
            value={endTime}
            onChange={({ target }) => setEndTime(target.value)}
            id='end-time'
          />
        </div>
        <div>Ohjaaja
          <input
            type='text'
            value={instructor}
            onChange={({ target }) => setInstructor(target.value)}
            id='instructor'
          />
        </div>

        <div>totalPlaces
          <input
            type='number'
            value={totalPlaces}
            onChange={({ target }) => setTotalPlaces(target.value)}
            id='total-places'
          />
        </div>
        <div>Kurssin kuvaus &nbsp;
          <input
            type="text"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            id="description"
          />
        </div>
        <Button variant='info' id="login-button" type="submit">luo kurssi</Button>
      </form>
    </div>

  )
}

export default LoginForm