import axios from "axios";
import { useEffect, useState } from "react"
import { getTomorrow } from "shared/lib/utils/getTomorrow";
import { I, IDayForecast } from "shared/models/IDayForecast";

const NUMBER_OF_DAYS = 7;
const API_KEY = process.env.API_KEY || 'f79b0f90764d4756b7e180149230512';
const tomorrow = getTomorrow();

export const use7DayForecast = (city: string = 'Taganrog') => {
    const [sevenDayForecast, setSevenDayForecast] = useState<I[]>();
    const [error, setError] = useState('');

    useEffect(() => {
        axios
          .get<IDayForecast>(
            `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city || 'Taganrog'}&days=${NUMBER_OF_DAYS}&aqi=no`
          )
          .then(res  => setSevenDayForecast(res.data.forecast.forecastday))
          .catch((err) => {
            setError(err.message)
          })
      }, [])

    return {sevenDayForecast, error}
}