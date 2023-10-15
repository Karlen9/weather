import cls from './MainPage.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  return <div className={classNames(cls.MainPage, {}, [])}>
    <div className={cls.nameSection}>
      <span className={cls.nameSpan}>{t('I am Karlen')}</span>
    </div>
  </div>
}

export default MainPage
