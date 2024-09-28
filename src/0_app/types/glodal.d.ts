/* eslint-disable no-unused-vars */
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }

    const classNames: IClassNames
    export = classNames
}

declare module '*.svg' {
    import * as React from 'react'

    const SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    export default SVG
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.gif'

declare const __IS_DEV__: boolean
declare const __API__: string
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest'

declare type DeepPartial<T> =
    T extends object
        ? { [P in keyof T]?: DeepPartial<T[P]> }
        : T

declare type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
}
