import axios from 'axios'
import userService from './user'

const baseUrl = '/api/courses'

const config = () => {
    return {
        headers: {
            Authorization: `bearer ${userService.getToken()}`
        },
    }
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log('course.js getAll, response.data: ', response.data);
    return response.data
}

const createNew = async newObject => {
    console.log('createNew here')
    console.log('createNew description: ', newObject.description);
    const response = await axios.post(baseUrl, newObject, config())
    return response.data
}

const bookCourse = (id, newObject) => {
    newObject.bookedPlaces = newObject.bookedPlaces + 1
    const request = axios.put(`${baseUrl}/${id}`, newObject)
}
/*
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    console.log('blogs.js, id: ', id);
    return axios.delete(`${baseUrl}/${id}`, config())
}

const like = async (id) => {
    console.log('like config ', config())

    const res = await axios.put(
        `${baseUrl}/${id}`, config()
    )
    console.log('id: ', id)
    console.log('like res: ', res.data);
    return res.data
} */
export default { getAll, createNew, bookCourse /*, update, remove, like */ }