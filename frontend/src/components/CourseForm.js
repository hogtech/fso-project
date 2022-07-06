import { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../index.css'

const LoginForm = ({ onEdit }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onEdit(name, description)
    }
    const style = {
        color: '333333'
    }

    return (
        <div className='edit'>
            <h2>Log in to application</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    course name &nbsp;
                    <input
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        id='name'
                    />
                </div>
                <div>
                    course description &nbsp;
                    <input
                        type="text"
                        value={description}
                        onChange={({ target }) => setDescription(target.value)}
                        id="description"
                    />
                </div>
                <Button variant='info' id="login-button" type="submit">
                    login
                </Button>
            </form>
        </div>
    )
}

export default LoginForm