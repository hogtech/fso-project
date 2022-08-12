import { createSlice } from '@reduxjs/toolkit'
import courseService from '../services/course'

const courseSlice = createSlice({
  name: 'course',
  initialState: [],
  reducers: {

    setCourses(state, action) {
      console.log('setCourses: ', action.payload)
      return action.payload
    },
  }
})

export const initializeCourses = () => {
  console.log('inside initializeCourses')
  return async dispatch => {
    const courses = await courseService.getAll()
    dispatch(setCourses(courses))
  }
}

export const { setCourses } = courseSlice.actions
export default courseSlice.reducer