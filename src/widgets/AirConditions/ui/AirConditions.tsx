import { classNames } from "shared/lib/classNames/classNames"
import cls from './AirConditions.module.scss';
import { useTranslation } from "react-i18next";
import { AirProp } from "shared/ui/AirProp/AirProp";

interface AirConditionsProps {
    airCond: {
        feelsLike?: number, 
        humidity?: number, 
        wind?: number, 
        uvIndex?: number
    }
}


export const AirConditions: React.FC<AirConditionsProps> = (props) => {
    const { t } = useTranslation();
    const {
        feelsLike,
        humidity,
        wind,
        uvIndex
    } = props.airCond;

    return (
        <div className={classNames(cls.AirConditions)}>
            <div className={cls.header}>
                {t("Air Conditions").toUpperCase()}
            </div>
            <div className={cls.properties}>
                <div className={cls.leftBlock}>
                    <AirProp value={`${feelsLike} ℃`} title={t('Feels like')} />
                    <AirProp value={`${humidity}%`} title={t('Humidity')} />
                </div>
                <div className={cls.rightBlock}>
                    <AirProp value={`${wind} ${t('km/h')}`} title={t('Wind')} />
                    <AirProp value={uvIndex} title={t('UV Index')} />
                </div>
            </div>
        </div>
    )
}