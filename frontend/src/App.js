import { useState, useEffect, useRef } from 'react'

import loginService from './services/login'
import userService from './services/user'
import courseService from './services/course'

import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import { useSelector, useDispatch } from 'react-redux'
import store from './store'
import { Button } from 'react-bootstrap'
const App = () => {
    const dispatch = useDispatch()

    const [user, setUser] = useState(null)
    const [courses, setCourses] = useState(null)

    useEffect(() => {
        const userFromStorage = userService.getUser()
        if (userFromStorage) {
            setUser(userFromStorage)
        }
    }, [])

    useEffect(() => {
        const courses = courseService.getAll()
        console.log('courses: ', courses);
        setCourses(courses)
    }, [])
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
    const logout = () => {
        setUser(null)
        userService.clearUser()
        console.log('good bye!')
    }

    if (user === null) {
        return (
            <div className='container'>
                <LoginForm onLogin={login} />
                <SignupForm onSignup={signup} />
            </div>
        )
    }

    return (
        <div className='container'>
            <h2>users</h2>
            <div>
                {user.name} logged in&nbsp;
                <Button variant='info' onClick={logout}>logout</Button>
            </div>
            <h2>courses</h2>
            {courses.toString()}
        </div>
    )
}

export default App