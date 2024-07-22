import path from 'path'
import { BuildEnv, BuildOptions, BuildPaths } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv) => {
  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const apiUrl = env.apiUrl || 'http://localhost:8000'

  const isDev = mode === 'development'

  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const options: BuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  }

  return buildWebpackConfig(options)
}
