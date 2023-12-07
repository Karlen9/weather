import { useTranslation } from 'react-i18next'
import cls from './SettingsPage.module.scss'
import { TranslateToggle } from 'widgets/Navbar/ui/TranslateToggle/TranslateToggle';
import { ThemeSwitch } from 'widgets/ThemeSwitch';

const SettingsPage = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.SettingsPage}>
            <div className={cls.units}>
                <div className={cls.header}>{t('Units')}</div>
                <div className={cls.unitsContainer}>
                    <UnitSetting title={t('Temperature')} />
                    <UnitSetting title={t('Wind speed')} />
                    <UnitSetting title={t('Pressure')} />
                    <UnitSetting title={t('Precipitation')} />
                    <UnitSetting title={t('Distance')} />
                </div>
            </div>
            <div className={cls.units}>
                <div className={cls.header}>{t('General')}</div>
                <div className={cls.generalSettings}>
                    <div className={cls.generalSetting}>
                        <div>
                            {t('Language')}
                        </div>
                    <TranslateToggle />
                    </div>
                    <div className={cls.generalSetting}>
                        <div>
                            {t('Language')}
                        </div>
                    <ThemeSwitch />
                    </div>
                    <div className={cls.generalSetting}>
                        <div>
                            {t('12-h time')}
                        </div>
                        <input type='checkbox' />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SettingsPage


const UnitSetting = ({title, settings}: {title?: string, settings?: string}) => {
    return (
        <div className={cls.unitHeader}>
            {title?.toUpperCase()}
            <input type="checkbox" />
        </div>
    )
}