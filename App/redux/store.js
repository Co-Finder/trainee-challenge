import { configureStore } from '@reduxjs/toolkit'
import userReducer from './likeSlice'

export default configureStore({
  reducer:{
    user: userReducer,
  }
})