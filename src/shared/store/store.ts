import { combineReducers, configureStore } from '@reduxjs/toolkit'
import positionReducer from './reducers/PositionSlice'
import cityReducer from './reducers/CitySlice'

const rootReducer = combineReducers({
  positionReducer,
  cityReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
