import { useState, useEffect, useRef } from 'react'

import loginService from './services/login'
import userService from './services/user'
import LoginForm from './components/LoginForm'
import { useSelector, useDispatch } from 'react-redux'
import store from './store'
import { Button } from 'react-bootstrap'
const App = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState(null)

    useEffect(() => {
        const userFromStorage = userService.getUser()
        if (userFromStorage) {
            setUser(userFromStorage)
        }
    }, [])

    const login = async (username, password) => {
        loginService.login({
            username, password,
        }).then(user => {

            setUser(user)
            userService.setUser(user)
        }).catch(() => {
            console.log('user: ', user)
            console.log(userService.setUser);
            console.log('wrong username/password', 'alert')
        })
    }

    const logout = () => {
        setUser(null)
        userService.clearUser()
        console.log('good bye!')
    }

    if (user === null) {
        return <div className='container'>
            <LoginForm onLogin={login} />
        </div>
    }

    return (
        <div className='container'>
            <h2>users</h2>
            <div>
                {user.name} logged in&nbsp;
                <Button variant='info' onClick={logout}>logout</Button>
            </div>
        </div>
    )
}

export default App