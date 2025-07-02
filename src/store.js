import { configureStore } from '@reduxjs/toolkit'
import countSlice from './components/slice/countSlice'

export default configureStore({
  reducer: {
    count:countSlice
  },
})