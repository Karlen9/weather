import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { classNames }from 'shared/lib/classNames/classNames'
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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/'} element={<MainPage />} />
          </Routes>
        </Suspense>
    </div>
  );
};

export default App; 