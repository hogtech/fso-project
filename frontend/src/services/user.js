import axios from 'axios'
const baseUrl = '/api/users'

let token = null

const STORAGE_KEY = 'loggedBlogAppUser'

const setUser = (user) => {
    window.localStorage.setItem(
        STORAGE_KEY, JSON.stringify(user)
    )
    token = user.token
}

const getUser = () => {
    const loggedUserJSON = window.localStorage.getItem(STORAGE_KEY)
    if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        token = user.token
        return user
    }

    return null
}

const clearUser = () => {
    localStorage.clear()
    token = null
}

const getToken = () => token

const signup = async (signupInfo) => {
    console.log('signup here: ', signupInfo)
    const response = await axios.post(baseUrl, signupInfo)

    return response.data
}


/* const signup = async (signupInfo) => {
    console.log('signup mock here')
    const response = await axios.post(baseUrl, {
        username: "hhokka60",
        name: "Hans Hokka 6",
        password: "salasana"
    })
    console.log('response.data: ', response.data)
    return response.data
} */

export default {
    setUser, getUser, clearUser, getToken, signup
}