import { createSlice } from '@reduxjs/toolkit'
import courseService from '../services/course'

const courseSlice = createSlice({
    name: 'course',
    initialState: [],
    reducers: {

        setBlogs(state, action) {
            return action.payload
        },
    }
})

export const initializeBlogs = () => {
    //console.log('initializeBlogs: ')
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch(setBlogs(blogs))
    }
}

export const { setBlogs } = blogSlice.actions
export default courseSlice.reducer