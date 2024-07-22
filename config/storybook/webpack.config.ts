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

  SBWConfig.resolve.modules.push(paths.src)
  SBWConfig.resolve.extensions.push('.ts', '.tsx')
  SBWConfig.module.rules.push(buildCssLoader(true))

  SBWConfig.module.rules = config.module.rules
    .filter((rule: webpack.RuleSetRule) => !(rule.test instanceof RegExp && /svg/.test(rule.test.source)))

  SBWConfig.module.rules.push(buildSvgrLoader())

  SBWConfig.plugins.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
  }))

  return SBWConfig
}
