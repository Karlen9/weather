import cls from './MainPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Location } from 'widgets/Location'
import { Forecast } from 'widgets/Forecast'
import { AirConditions } from 'widgets/AirConditions'
import { SevenDayForecast } from 'widgets/7DayForecast'
import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { fetchCity } from 'shared/store/reducers/ActionCreator'
import { useCurrentWeather } from 'shared/hooks/useCurrentWeather'
import { useOneDayForecast } from 'shared/hooks/useOneDayForecast'

const MainPage = () => {
  const { name } = useAppSelector((state) => state.cityReducer)
  const dispatch = useAppDispatch()

  const city = 'Voronezh'

 
  const { weather, error } = useCurrentWeather(city)
  const { dayForecast, error: dayForecastError } = useOneDayForecast(city);

  const flooredTemp = useMemo(
    () => Math.floor(weather?.current?.temp_c ?? 0),
    [weather]
  )
  const flooredFeelsLike = useMemo(
    () => Math.floor(weather?.current?.feelslike_c ?? 0),
    [weather]
  )

  useEffect(() => {
    dispatch(fetchCity())
  }, [])

  return (
    <>
      {!error ? (
        <div className={classNames(cls.MainPage, {}, [])}>
          <div className={cls.row}>
            <Location
              cityName={city}
              locationWeather={{
                temperature: flooredTemp,
                humidity: weather?.current?.humidity,
                condition: weather?.current?.condition.text,
                icon: weather?.current.condition.icon,
                windDir: weather?.current.wind_dir,
                day: weather?.current.is_day
              }}
            />
            <div>
              <Forecast hours={dayForecast} />
              <AirConditions
                airCond={{
                  feelsLike: flooredFeelsLike,
                  humidity: weather?.current?.humidity,
                  wind: weather?.current.wind_kph,
                  uvIndex: weather?.current?.uv
                }}
              />
            </div>
          </div>
          <SevenDayForecast city={city} />
        </div>
      ) : (
        <div className={cls.error}>{error}</div>
      )}
    </>
  )
}

export default MainPage
