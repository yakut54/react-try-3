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
    SBWConfig.module.rules = SBWConfig.module.rules
      .filter((rule): rule is webpack.RuleSetRule => typeof rule === 'object'
                && rule !== null
                && 'test' in rule
                && rule.test instanceof RegExp
                && !/svg/.test(rule.test.source))

    SBWConfig.module.rules.push(buildSvgrLoader())
    SBWConfig.module.rules.push(buildCssLoader(true))
  }

  SBWConfig.plugins?.push(new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
  }))

  return SBWConfig
}
