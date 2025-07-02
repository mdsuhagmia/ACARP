import { createSlice } from '@reduxjs/toolkit'

export const countSlice = createSlice({
  name: 'counter',
  initialState: {
    value: localStorage.getItem("ami") ? JSON.parse(localStorage.getItem("ami")) : 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
      localStorage.setItem("ami", JSON.stringify(state.value))
    },
    decrement: (state)=>{
      state.value -= 1 ? state.value > 0 : 0
      localStorage.setItem("ami", JSON.stringify(state.value))
    },
  },
})

export const { increment, decrement } = countSlice.actions

export default countSlice.reducer