import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IWeather } from 'shared/models/IWeather'

const API_KEY = process.env.API_KEY || 'f79b0f90764d4756b7e180149230512';

export const useCurrentWeather = (city?: string) => {
  const [weather, setWeather] = useState<IWeather | null>(null)
  const [error, setError] = useState('')
  const navigator = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      )
      .then(res => setWeather(res.data))
      .catch((err) => {
        setError(err.message)
      })
  }, [city])
 
  return { weather, error }
}
 