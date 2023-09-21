import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';


export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle =() => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [])}>
      <button onClick={onToggle}>
        toggle
      </button>
    </div>
  )
}