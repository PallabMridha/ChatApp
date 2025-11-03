import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1
  },
  reducers: {
    userloginginfo: (state, action) => {
        console.log(action);
        state.value = action.payload;
        
    },
  
  }
})

// Action creators are generated for each case reducer function
export const { userloginginfo } = userSlice.actions

export default userSlice.reducer