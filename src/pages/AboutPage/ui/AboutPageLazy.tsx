import { lazy } from 'react'

export const AboutPageLazy = lazy(async () =>
  // @ts-expect-error
  setTimeout(() => {
    import('./AboutPage')
  }, 1500)
)
