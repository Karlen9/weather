import { AboutPage } from 'pages/AboutPage'
import { CitiesPage } from 'pages/CitiesPage'
import { MainPage } from 'pages/MainPage'
import { MapPage } from 'pages/MapPage'
import NotFound from 'pages/NotFound/NotFound'
import SettingsPage from 'pages/Settings/ui/SettingsPage'
import type { RouteProps } from 'react-router-dom'
import { Weather } from 'widgets/Weather'
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  CITIES = 'cities',
  MAP = 'map',
  WEATHER = 'weather',
  SETTINGS = 'settings',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.WEATHER]: '/weather',
  [AppRoutes.MAP]: '/map',
  [AppRoutes.SETTINGS]: '/settings',
  [AppRoutes.CITIES]: '/cities',
  [AppRoutes.NOT_FOUND]: '/not-found'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.WEATHER]: {
    path: RoutePath.about,
    element: <Weather />
  },
  [AppRoutes.CITIES]: {
    path: RoutePath.cities,
    element: <CitiesPage />
  },
  [AppRoutes.MAP]: {
    path: RoutePath.map,
    element: <MapPage />
  },
  [AppRoutes.SETTINGS]: {
    path: RoutePath.settings,
    element: <SettingsPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFound />
  }
}



