import { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../index.css'

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onLogin(username, password)
    }
    const style = {
        color: '333333'
    }

    return (
        <div className='login'>
            <h2>Varaukset</h2>
            <h2>Ole hyvä ja kirjaudu sisään</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    Sähköposti &nbsp;
                    <input
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                        id='username'
                    />
                </div>
                <div>
                    Salasana &nbsp;
                    <input
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        id="password"
                    />
                </div>
                <Button variant='info' id="login-button" type="submit">
                    KIRJAUDU
                </Button>
            </form>
            <p>Eikö sinulla ole vielä tunnuksia? Syötä tietosi, eikä se sido sinua mihinkään.</p>
            <p>Unohditko salasanasi? Voit luoda uuden salasanan sähköpostiisi lähetettävän linkin avulla.</p>
        </div>
    )
}

export default LoginForm