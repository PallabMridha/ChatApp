import { configureStore } from '@reduxjs/toolkit'
import userSlice from '/src/slices/userSlice'


export default configureStore({
  reducer: {
    userinformation: userSlice
  },
})