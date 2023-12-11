import { use7DayForecast } from 'shared/hooks/use7DayForecast'
import cls from './City.module.scss'
import { useTranslation } from 'react-i18next'
type Props = {
  city?: string
  key: string
  requestName?: string
}

export const City: React.FC<Props> = ({ city, key, requestName }) => {
  const { sevenDayForecast } = use7DayForecast(requestName)
  const { t } = useTranslation()
  return (
    <div className={cls.cityContainer} key={key}>
      <div className={cls.cityName}>{city}</div>
      {sevenDayForecast &&
        sevenDayForecast.map((day) => (
          <div className={cls.day} key={day.date_epoch}>
            {/* <div>{day.date}</div> */}
            <div className={cls.conditionContainer}>
              <div>
                <img src={day.day.condition.icon} alt="" />
              </div>
              
            </div>

            <div>
              {Math.floor(day.day.maxtemp_c)}/{Math.floor(day.day.mintemp_c)} 
            </div>
          </div>
        ))}
    </div>
  )
}
