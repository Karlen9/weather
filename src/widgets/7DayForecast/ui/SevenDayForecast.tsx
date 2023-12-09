import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SevenDayForecast.module.scss'
import { use7DayForecast } from 'shared/hooks/use7DayForecast'
import umbrella from 'shared/assets/icons/umbrella.png'
import { useTranslation } from 'react-i18next'

const week = [
  { name: 'Sun' },
  { name: 'Mon' }, 
  { name: 'Tue' },
  { name: 'Wed' },
  { name: 'Thu' },
  { name: 'Fri' },
  { name: 'Sat' }
]

interface Props {
  city?: string
}

export const SevenDayForecast: React.FC<Props> = ({ city }) => {
  const { sevenDayForecast } = use7DayForecast(city)
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.SevenDayForecast)}>
      <div className={cls.wrapper}>
        <div className={cls.header}>7-DAY FORECAST</div>
        <div className={cls.week}>
          {sevenDayForecast &&
            sevenDayForecast.map((day, i) => (
              <div className={cls.day} key={day.date_epoch}>
                <div>{i === 0 ? t('Today') : i === 1 ? t('Tomorrow') : day.date}</div>
                <div className={cls.conditionContainer}>
                  <div>
                    <img src={day.day.condition.icon} alt="" />
                  </div>
                  <div className={cls.condition}>
                    {t(`${day.day.condition.text}`)}
                  </div>
                </div>

                <div className={cls.chanceOfRain}>
                  <img src={umbrella} width={35} alt="" />
                  {day.day.daily_chance_of_rain}%
                </div>

                <div>
                  {Math.floor(day.day.maxtemp_c)}/
                  {Math.floor(day.day.mintemp_c)}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
