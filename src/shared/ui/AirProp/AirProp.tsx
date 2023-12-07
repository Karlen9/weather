import { classNames } from "shared/lib/classNames/classNames"
import cls from './AirProp.module.scss'
import { useTranslation } from "react-i18next"

type AirPropProps = {
    value?: number | string
    title?: string
    icon?: string
}

export const AirProp: React.FC<AirPropProps> = (props) => {
    const { t } = useTranslation();
    const {
        value,
        title,
        icon
    } = props;

    const symbol = {
        wind: t('km/h'),
        humidity: "%"
    }

    return (
        <div className={classNames(cls.AirProp)}>
            <div className={cls.title}>{title}</div>
            <div className={cls.value}>{value}</div>
        </div>
    )
}