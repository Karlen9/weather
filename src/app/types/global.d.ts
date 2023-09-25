declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classnames: IClassNames
  export = classnames
}

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'

declare const _IS_DEV_
