import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitch.module.scss';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface ThemeSwitchProps {
  className?: string
}
export const ThemeSwitch = ({className}: ThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames(cls.ThemeSwitch, {}, [className])}>
      <button onClick={toggleTheme}>
        {theme === Theme.DARK ? <LightIcon width={30} height={30} /> : <DarkIcon width={30} />}
      </button>
    </div>
 )
}