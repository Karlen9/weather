import { useTranslation } from 'react-i18next'
import cls from './NotFound.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const { t } = useTranslation();
  const navigator = useNavigate();

    const backToMain = () => {
        navigator('/')
    }
  return (
    <div className={cls.NotFound}>
      <div className={cls.errorCode}>404</div>
      <div className={cls.errorText}>Not found</div>
      <div>
        <Button onClick={backToMain} theme={ThemeButton.SUBMIT}>{t('Back to Main page')}</Button>
      </div>
    </div>
  )
}

export default NotFound
