import { classNames } from "shared/lib/classNames/classNames"
import cls from './SevenDayForecast.module.scss';

const week = [
    {name: 'Sun'},
    {name: 'Mon'},
    {name: 'Tue'},
    {name: 'Wed'},
    {name: 'Thu'},
    {name: 'Fri'},
    {name: 'Sat'},

]

export const SevenDayForecast = () => {
    return (
        <div className={classNames(cls.SevenDayForecast)}>
            7-DAY FORECAST
            <div className={cls.week}>
                {week.map(day => 
                    <div className={cls.day} key={day.name}>
                        <div>{day.name}</div>
                        <div>Sunny</div>
                        <div>34/12</div>
                    </div>
                )}
            </div>
        </div>
    )
}