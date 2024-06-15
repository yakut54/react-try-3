import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgrLoader } from './loaders/buildSvgrLoader'

export function svgrLoader({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const tsLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const sassLoader: webpack.RuleSetRule = buildCssLoader(isDev)

  const svgrLoader: webpack.RuleSetRule = buildSvgrLoader()

  const fileLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|woff2|woff|eot|ttf|json|ico)$/i,
    use: [{ loader: 'file-loader' }],
  }

  const babelLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  }

  return [
    fileLoader,
    svgrLoader,
    sassLoader,
    babelLoader,
    tsLoader,
  ]
}
