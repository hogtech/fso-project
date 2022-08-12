import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/user'

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {

    getUser(state, action) {
      console.log('getUser, action.payload: ', action.payload)
      return action.payload
    },
    setUser(state, action) {
      console.log('setUser, action.payload: ', action.payload)
      return action.payload
    },
    removeUser(state, action) {
      console.log('removeUser, action.payload: ', action.payload)
      return null
    }
  }
})


// eslint-disable-next-line no-unused-vars
export const fetchUser = content => {
  return async dispatch => {
    const user = await userService.getUser()
    console.log('fetchUser, user: ', user)
    dispatch(getUser(user))
  }
}

export const putUser = content => {
  return async dispatch => {
    const user = await userService.setUser(content)
    dispatch(setUser(user))
  }
}

// eslint-disable-next-line no-unused-vars
export const emptyUser = content => {
  return async dispatch => {
    const user = await userService.clearUser()
    dispatch(removeUser(user))
  }
}
export const { getUser, setUser, removeUser } = userSlice.actions
export default userSlice.reducer