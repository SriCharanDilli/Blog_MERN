import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'
export const Store = configureStore({
  reducer: {
   user : userReducer,
  },
})