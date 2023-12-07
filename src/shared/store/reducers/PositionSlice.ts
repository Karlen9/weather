import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IPosition } from 'shared/models/IPosition'

interface PositionState {
  position: IPosition
  isLoading: boolean
  error: string
}

const initialState: PositionState = {
  position: {},
  isLoading: false,
  error: ''
}

export const positionSlice = createSlice({
  name: 'positon',
  initialState,
  reducers: {
    setPosition(state, action: PayloadAction<IPosition>) {
      state.position = action.payload
    }
  }
})

export default positionSlice.reducer
