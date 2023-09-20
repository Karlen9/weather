import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  const {toggleTheme} = useTheme();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>

      <div className={cls.logo}>LOGO</div>


      <div className={cls.rightBar}>
        <div className={cls.switch}>
          <ThemeSwitch />
        </div>

        <div className={cls.links}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} >  
            Главная
          </AppLink>

          <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}> 
            О Сайте
          </AppLink>
        </div>
        
      </div>
    </div>
  )
}