import { classNames } from "shared/lib/classNames/classNames"
import cls from './Location.module.scss';
import { useTranslation } from "react-i18next";
import { conditions } from "shared/lib";
import { iconsDay512, iconsNight512, windDirection } from "shared/lib/constants";
import windRose from 'shared/assets/images/wind_rose.png';
import windRoseDark from 'shared/assets/images/wind_rose_dark.png';

import { useTheme } from "app/providers/ThemeProvider";

interface LocationProps {
    cityName?: string
    locationWeather: {
        temperature?: number,
        humidity?: number,
        condition?: string
        windDir?: number
        icon?: string
        day?: number
    }
}

export const Location: React.FC<LocationProps> = (props) => {
    const { locationWeather, cityName } = props; 
    const { theme } = useTheme();
    const {
        temperature, 
        humidity,
        condition,
        windDir,
        icon,
        day
    } = locationWeather;

    const { t } = useTranslation()

    return (
        <div className={classNames(cls.Location)}>
            <div className={cls.leftBlock}>
                <div className={cls.cityPercent}>
                    <div className={cls.city}>{cityName}</div>
                    <div className={cls.percent}>{t('Humidity')}: {humidity}%</div>
                </div>
           
                <div className={cls.windContainer}>
                    <img src={theme === 'dark' ? windRoseDark : windRose} className={`${cls[windDirection[windDir ?? 'S']]} ${cls.wind}`} width={200} />
                    Направление ветра
                </div>

                <div className="">
                    <div className={cls.tempAndCondition}>
                        <div className={cls.temp}>{temperature}℃</div>
                        <div className={cls.condition}>/ {condition && t(conditions[condition])}</div>
                    </div>
                </div>
            </div>
            <div className={cls.rightBlock}>
                <img src={day === 1 ? iconsDay512[condition ?? 'Clean'] : iconsNight512[condition ?? 'Clean']} width={350}/>
                
            </div>
        </div>
    )
}