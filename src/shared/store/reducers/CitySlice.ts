import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICity } from 'shared/models/ICity'

interface CityState {
  name: string
  lat: number
  lon: number
  isLoading: boolean
  error: string
}

const initialState: CityState = {
  name: '',
  lat: 0,
  lon: 0,
  isLoading: false,
  error: ''
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    cityFetching(state) {
      state.isLoading = true
    },
    cityFetchingSuccess(state, action: PayloadAction<ICity>) {
      state.isLoading = false
      state.error = ''
      state.name = action.payload.name
      state.lat = action.payload.lat
      state.lon = action.payload.lon
    },
    cityFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    setLocationCity(state, action: PayloadAction<CityState>) {
      state = action.payload
    }
  }
})

export default citySlice.reducer
