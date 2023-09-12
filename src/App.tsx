import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import { Link } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPageLazy';
import { MainPageLazy } from './pages/MainPage/MainPageLazy';
import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

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
            <Route path={'/about'} element={<AboutPageLazy />} />
            <Route path={'/counter'} element={<Counter />} />
            <Route path={'/'} element={<MainPageLazy />} />
          </Routes>
        </Suspense>
    </div>
  );
};

export default App; 