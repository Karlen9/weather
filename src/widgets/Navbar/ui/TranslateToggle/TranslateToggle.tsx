import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import USFlag from 'shared/assets/icons/us-flag.svg'
import RusFlag from 'shared/assets/icons/russian-flag.svg'

export const TranslateToggle = () => {
  const { i18n } = useTranslation()

  const toggle = () => {
    const lang = i18n.language === 'ru' ? 'en' : 'ru'
    i18n.changeLanguage(lang).catch((err) => {
      console.error(err)
    })
  }

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggle}>
      {i18n.language === 'ru' ? (
        <RusFlag width={28} height={28} />
      ) : (
        <USFlag width={28} height={28} />
      )}
    </Button>
  )
}
