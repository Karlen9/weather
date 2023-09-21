import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import GitHubLogo from 'shared/assets/icons/github.svg';
import cls from './Navbar.module.scss';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface NavbarProps {
  className?: string
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>

      <div className={cls.logo}>LOGO</div>


      <div className={cls.rightBar}>
       

        <div className={cls.links}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} >  
            Main
          </AppLink>

          <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}> 
            About
          </AppLink>
        </div>

        <div className={cls.switch}>
          <ThemeSwitch />
        </div>

          <Button theme={ThemeButton.ICON} > 
            <GitHubLogo width={20} />
          </Button>
        
      </div>
    </div>
  )
}