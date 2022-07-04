import { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../index.css'

const LoginForm = ({ onSignup }) => {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        onSignup(username, name, password)
    }
    const style = {
        color: '333333'
    }

    return (
        <div className='login'>
            <h2>Sign up for application</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    username &nbsp;
                    <input
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                        id='signup-username'
                    />
                </div>
                <div>
                    name &nbsp;
                    <input
                        type="name"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        id="signup-name"
                    />
                </div>
                <div>
                    password &nbsp;
                    <input
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        id="signup-password"
                    />
                </div>

                <Button variant='info' id="signup-login-button" type="submit">
                    login
                </Button>
            </form>
        </div>
    )
}

export default LoginForm