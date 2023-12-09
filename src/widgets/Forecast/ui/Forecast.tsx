import { classNames } from "shared/lib/classNames/classNames"
import cls from './Forecast.module.scss';
import { useTranslation } from "react-i18next";
import { Hour } from "shared/models/IDayForecast";
import { getHourFromDate } from "shared/lib/utils/getHourFromDate";
import { getDayForecastArray } from "shared/lib/utils/getDayForecastArray";

interface ForecastProps {
    hours?: Hour[];
}

export const Forecast = (props: ForecastProps) => {
    const { hours } = props;
    const { t } = useTranslation()
    const arr = getDayForecastArray(hours)


    return (
        <div className={classNames(cls.Forecast)}>
            {t('Forecast').toUpperCase()}
            <div className={cls.dayForecast}>
                {arr?.map(hour => (
                    <div key={hour.time_epoch} className={cls.oneHour}>
                        <div>{`${getHourFromDate(hour.time)}:00`}</div>
                        <img src={hour.condition.icon} alt="" />  
                        <div className={cls.temperature}>{Math.floor(hour.temp_c)}°</div>  
                    </div>
                ))}
            </div>
        </div>
    )
}