import cls from './MainPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  return <div className={classNames(cls.MainPage, {}, [])}>{t('Главная')}</div>
}

export default MainPage
