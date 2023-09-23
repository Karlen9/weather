import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import BurgerIcon from 'shared/assets/icons/burger.svg';
import { useTheme } from 'app/providers/ThemeProvider';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {theme} = useTheme();

  const isDark = useMemo(() => theme === 'dark', [theme])


  const onToggle =() => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [])}>
      <Button theme={ThemeButton.CLEAR} onClick={onToggle} className={cls.toggle}>
        <BurgerIcon  width={20} color={isDark ? '#4FD1C5' : '#2D3748'} />
      </Button>
    </div>
  )
}