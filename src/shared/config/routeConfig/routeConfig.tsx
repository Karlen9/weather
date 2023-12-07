import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import SettingsPage from 'pages/Settings/ui/SettingsPage'
import type { RouteProps } from 'react-router-dom'
import { Weather } from 'widgets/Weather'
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  CITIES = 'cities',
  MAP = 'map',
  WEATHER = 'weather',
  SETTINGS = 'settings'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.WEATHER]: '/weather',
  [AppRoutes.MAP]: '/map',
  [AppRoutes.SETTINGS]: '/settings',
  [AppRoutes.CITIES]: '/cities'
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
    element: <Weather />
  },
  [AppRoutes.MAP]: {
    path: RoutePath.map,
    element: <Weather />
  },
  [AppRoutes.SETTINGS]: {
    path: RoutePath.settings,
    element: <SettingsPage />
  },
}



