import { Hour } from 'shared/models/IDayForecast'

export const getDayForecastArray = (hours?: Hour[]) => {
  const resultArr = hours?.filter(
    (_, i) => i === 6 || i === 9 || i === 12 || i === 15 || i === 18 || i === 21
  )

  return resultArr
}
