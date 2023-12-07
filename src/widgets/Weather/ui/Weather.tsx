import { classNames } from "shared/lib/classNames/classNames"
import cls from './Weather.module.scss'

export const Weather = () => {
    return (
        <div className={classNames(cls.Weather)}>
            weather
        </div>
    )
}