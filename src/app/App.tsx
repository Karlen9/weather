import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import './styles/index.scss'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense } from 'react'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme ?? ''])}>
      <Suspense fallback="">
        <div className="content-page">
        <Navbar />
        <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
