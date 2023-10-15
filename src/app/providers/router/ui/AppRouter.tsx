import { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
  const { t } = useTranslation()
  return (
    <div className="page-wrapper">
      <Suspense fallback={<div>{t('Loading')}...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} element={element} path={path} />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}
