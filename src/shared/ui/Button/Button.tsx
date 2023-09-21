
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Loading from 'shared/assets/icons/loading.svg';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  SUBMIT = 'submit',
  CANCEL = 'cancel',
  DISABLED = 'disabled',
  OUTLINED = 'outlined',
  ICON = 'icon',
  LOADING = 'loading'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { 
    className,
    children,
    theme,
    ...restProps
  } = props;

  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...restProps}>
      {theme === ThemeButton.LOADING ? <Loading /> : children} 
    </button>
  )
}