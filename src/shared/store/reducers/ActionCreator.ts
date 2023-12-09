import { AppDispatch } from '../store'
import { citySlice } from './CitySlice'
import axios from 'axios'
import { IPosition } from 'shared/models/IPosition'

export const fetchCity = () => async (dispatch: AppDispatch) => {
  let currPosition: IPosition = {}
  const success = (position: any) => {
    currPosition = position
  }
  const error = () => {
    console.error('User denied permission')
  }

  navigator.geolocation.getCurrentPosition(success, error)

  const longitude = currPosition.coords?.longitude
  const latitude = currPosition.coords?.latitude
  try {
    console.log('try')
    dispatch(citySlice.actions.cityFetching())
    const response = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    )
    dispatch(
      citySlice.actions.cityFetchingSuccess({
        name: response.data.city,
        lat: response.data.latitude,
        lon: response.data.longitude
      })
    )
  } catch (e) {
    dispatch(citySlice.actions.cityFetchingError(e.message))
  }
}
