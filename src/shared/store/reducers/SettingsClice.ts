import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  Temperature,
  Speed,
  Pressure,
  Precipitation,
  Distance
} from 'shared/models/ISettings'

interface SettingsState {
  temperature: Temperature
  windSpeed: Speed
  pressure: Pressure
  precipitation: Precipitation
  distance: Distance
}

const initialState: SettingsState = {
  temperature: 'Celsius',
  windSpeed: 'kmh',
  pressure: 'mm',
  precipitation: 'mm',
  distance: 'km'
}

export const settingsSlise = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTempSetting(state, action: PayloadAction<Temperature>) {
      state.temperature = action.payload
    },
    setWindSpeedSetting(state, action: PayloadAction<Speed>) {
      state.windSpeed = action.payload
    },
    setPressureSetting(state, action: PayloadAction<Pressure>) {
      state.pressure = action.payload
    },
    setPrecipitationSetting(state, action: PayloadAction<Precipitation>) {
      state.precipitation = action.payload
    }
  }
})

export default settingsSlise.reducer
