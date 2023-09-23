import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitch.module.scss';
import DarkIcon from 'shared/assets/icons/dark-mode.svg';
import LightIcon from 'shared/assets/icons/light-mode.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitchProps {
  className?: string
}

export const ThemeSwitch = ({className}: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames(cls.ThemeSwitch, {}, [className])}>
      <Button 
        className={cls.button} 
        theme={ThemeButton.ICON} 
        onClick={toggleTheme}
      >
        {theme === Theme.DARK 
          ? <LightIcon width={23} height={23} /> 
          : <DarkIcon width={23}  height={23}  />
        }
      </Button>
    </div>
 )
}