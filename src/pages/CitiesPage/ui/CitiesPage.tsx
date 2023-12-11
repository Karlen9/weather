import { Search } from 'shared/ui'
import cls from './CitiesPage.module.scss'
import { useState } from 'react'
import { use7DayForecast } from 'shared/hooks/use7DayForecast'
import { City } from './City'

const cities = [
  { name: 'New York', requestName: 'NY' },
  { name: 'London', requestName: 'London' },
  { name: 'Moscow', requestName: 'Moscow' },
  { name: 'Paris', requestName: 'Paris' },
  { name: 'Yerevan', requestName: 'Yerevan' },
  { name: 'Dubai', requestName: 'Dubai' },
  { name: 'Toronto', requestName: 'Toronto' },
]

const CitiesPage = () => {

  return (
    <div className={cls.CitiesPage}>
      <Search />
      {cities.map((city) => (
        <City key={city.name} city={city.name} requestName={city.requestName} /> 
      ))}
    </div>
  )
}

export default CitiesPage
