import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitch } from 'widgets/ThemeSwitch'
import cls from './Navbar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { TranslateToggle } from './TranslateToggle/TranslateToggle'
import { useTheme } from 'app/providers/ThemeProvider'
import { useMemo } from 'react'
import { GithubIcon } from 'shared/assets/icons/GithubIcon';
import Weather from 'shared/assets/icons/weather-route.svg';
import Settings from 'shared/assets/icons/settings-route.svg';
import Map from 'shared/assets/icons/map-route.svg';
import Cities from 'shared/assets/icons/cities-route.svg';


interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const { theme } = useTheme()
  const isDark = useMemo(() => theme === 'dark', [theme])

  return ( 
    <div className={classNames(cls.navbar, {}, [className ?? ''])}>
        <div className={cls.links}>
          <AppLink 
            theme={AppLinkTheme.PRIMARY} 
            to={'/'} 
            className={cls.routeContainer}
          >
            <Weather width={50} height={50} />
            {t('Weather')}
          </AppLink>

          <AppLink 
            theme={AppLinkTheme.PRIMARY} 
            to={'/cities'} 
            className={cls.routeContainer}
          >
            <Cities width={40} height={40} />
            {t('Cities')}
          </AppLink>
          <AppLink 
            theme={AppLinkTheme.PRIMARY} 
            className={cls.routeContainer} 
            to={'/map'}
          >
            <Map width={40} height={40} />
            {t('Map')}
          </AppLink>
          <AppLink 
            theme={AppLinkTheme.PRIMARY} 
            to={'/settings'} 
            className={cls.routeContainer}
          >
            <Settings width={40} height={40} />
            {t('Settings')}
          </AppLink>
        </div> 

      
    </div>
  )
}
