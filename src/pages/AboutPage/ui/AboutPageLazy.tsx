import { lazy } from 'react'

export const AboutPageLazy = lazy(
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  () =>
    new Promise((resolve) => {
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      setTimeout(() => resolve(import('./AboutPage')), 1500)
    })
)
