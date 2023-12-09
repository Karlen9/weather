import { Search } from 'shared/ui'
import cls from './CitiesPage.module.scss'
import { useState } from 'react'

const cities = [
  { name: 'New York', requestName: 'NY' },
  { name: 'London', requestName: 'London' },
  { name: 'Moscow', requestName: 'Moscow' },
  { name: 'Paris', requestName: 'Paris' },
  { name: 'Yerevan', requestName: 'Yerevan' },
  { name: 'Dubai', requestName: 'Dubai' },
  { name: 'Torronto', requestName: 'Torronto' },
]

const CitiesPage = () => {
  return (
    <div className={cls.CitiesPage}>
      <Search />
      {cities.map((city) => (
        <div className={cls.cityContainer} key={city.name}>{city.name}</div>
      ))}
    </div>
  )
}

export default CitiesPage
