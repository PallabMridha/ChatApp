import { createSlice } from '@reduxjs/toolkit'

export const userslice = createSlice({
  name: 'counter',
  initialState: {
    value: 1
  },
  reducers: {
    userloginginfo: (state, action) => {
      console.log(action);
      state.value = action.payload;
    },
  },
})

export const { userloginginfo } = userslice.actions
export default userslice.reducer
