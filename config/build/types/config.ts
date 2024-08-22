export type BuildMode = 'production' | 'development'
export type Project = 'frontend' | 'storybook' | 'jest'

export interface BuildPaths {
    entry: string
    build: string
    html: string
    src: string
}

export interface BuildEnv {
    mode: BuildMode,
    port: number,
    apiUrl: string
}

export interface BuildOptions {
    project: Project,
    mode: BuildMode
    paths: BuildPaths,
    isDev: boolean,
    port: number,
    apiUrl: string,
}
