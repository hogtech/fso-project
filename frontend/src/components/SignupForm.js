import { useState } from 'react'
import { Button } from 'react-bootstrap'
import '../index.css'

const SignupForm = ({ onSignup }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        onSignup(email, name, password)
    }
    const style = {
        color: '333333'
    }

    return (
        <div className='login'>
            <h2>Luo uudet tunnukset täyttämällä oheiset kentät.</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    Nimi: &nbsp;
                    <input
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        id="signup-name"
                    />
                </div>
                <div>
                    Sähköpostiosoite: &nbsp;
                    <input
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        id="signup-email"
                    />
                </div>
                <div>
                    Salasana: &nbsp;
                    <input
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        id="signup-password"
                    />
                </div>

                <Button variant='info' id="signup-login-button" type="submit">
                    Hyväksyn ehdot ja haluan jatkaa
                </Button>
            </form>
        </div>
    )
}

export default SignupForm