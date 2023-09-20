import { Link, Routes, Route } from 'react-router-dom';
import { classNames }from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import './styles/index.scss'



const App = () => {
  
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>
        THEME
      </button>
      <Link to={'/'} >  
        Главная
      </Link>

      <Link to={"/about"}> 
        О Сайте
      </Link>
        <AppRouter />
    </div>
  );
};

export default App; 