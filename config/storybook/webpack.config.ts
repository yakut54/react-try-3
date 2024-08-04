import webpack, { type Configuration } from 'webpack'
import path from 'path'
import { BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgrLoader } from '../build/loaders/buildSvgrLoader'

type WebpackConfig = {
    config: webpack.Configuration
}

export default ({ config }: WebpackConfig) => {
  const paths: Partial<BuildPaths> = {
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  const SBWConfig: Configuration = { ...config }

  SBWConfig.resolve?.extensions?.push('.ts', '.tsx')

  if (SBWConfig.resolve?.modules && paths.src) {
    SBWConfig.resolve.modules.push(paths.src)
  }

  if (SBWConfig.module && SBWConfig.module.rules) {
    // Фильтруем правила, чтобы исключить SVG, если они уже добавлены
    SBWConfig.module.rules = SBWConfig.module.rules
      .filter((rule): rule is webpack.RuleSetRule => typeof rule === 'object'
                && rule !== null
                && 'test' in rule
                && rule.test instanceof RegExp
                && !/svg/.test(rule.test.source))

    // Добавляем правило для обработки SVG
    SBWConfig.module.rules.push(buildSvgrLoader())
    // Добавляем правило для обработки CSS
    SBWConfig.module.rules.push(buildCssLoader(true))
    // Добавляем правило для обработки файлов (например, изображений)
    SBWConfig.module.rules.push({
      test: /\.(png|jpe?g|gif|woff2?|eot|ttf|ico)$/i,
      use: [{ loader: 'file-loader' }],
    })
  }

  SBWConfig.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('http://localhost:8000'),
  }))

  return SBWConfig
}
