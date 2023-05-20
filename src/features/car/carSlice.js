import { createSlice } from '@reduxjs/toolkit'

export const carSlice = createSlice({
  name: 'counter',
  initialState: {
    filteredCars: []
  },
  reducers: {
    updatedFilteredCars: (state,action) => {
      state.filteredCars = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { updatedFilteredCars } = carSlice.actions

export default carSlice.reducer