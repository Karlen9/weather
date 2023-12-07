import axios from "axios";
import { useEffect, useState } from "react";
import { getTomorrow } from "shared/lib/utils/getTomorrow";
import { Hour, IDayForecast } from "shared/models/IDayForecast";

const API_KEY = process.env.API_KEY || 'f79b0f90764d4756b7e180149230512';

export const useOneDayForecast = (city?: string) => {
    const [dayForecast, setDayForecast] = useState<Hour[]>();
    const [error, setError] = useState('');

    const tomorrow = getTomorrow();
    useEffect(() => {
        axios
          .get<IDayForecast>(
            `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city || 'Taganrog'}&unixdt=${tomorrow}&aqi=no`
          )
          .then(res  => setDayForecast(res.data.forecast.forecastday[0].hour))
          .catch((err) => {
            setError(err.message)
          })
      }, [])

      return {dayForecast, error}
}