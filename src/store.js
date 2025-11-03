import { configureStore } from '@reduxjs/toolkit'
import { userslice } from '/src/slices/userslice'



export default configureStore({
  reducer: {
    userinformation: userslice
  },
})
