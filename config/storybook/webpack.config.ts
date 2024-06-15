import webpack, { type Configuration } from 'webpack'
import path from 'path'
import { BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSvgrLoader } from '../build/loaders/buildSvgrLoader'

type WebpackConfig = {
    config: webpack.Configuration
}

export default ({ config }: WebpackConfig) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }

  const SBWConfig: Configuration = { ...config }

  SBWConfig.resolve.modules.push(paths.src)
  SBWConfig.resolve.extensions.push('.ts', '.tsx')
  SBWConfig.module.rules.push(buildCssLoader(true))

  SBWConfig.module.rules = config.module.rules
    .filter((rule: webpack.RuleSetRule) => !(rule.test instanceof RegExp && /svg/.test(rule.test.source)))

  SBWConfig.module.rules.push(buildSvgrLoader())

  return SBWConfig
}

//
// import webpack, { type Configuration } from 'webpack'
// import path from 'path'
// import { BuildPaths } from '../build/types/config'
//
// type WebpackConfig = {
//   config: webpack.Configuration
// }
//
// export default ({ config }: WebpackConfig) => {
//   const paths: BuildPaths = {
//     build: '',
//     html: '',
//     entry: '',
//     src: path.resolve(__dirname, '..', '..', 'src'),
//   }
//
//   const SBWConfig: Configuration = {
//     ...config,
//     module: {
//       ...config.module,
//       rules: [
//         ...config.module.rules,
//         ...config.module.rules
//             .filter((rule: webpack.RuleSetRule) => !(rule.test instanceof RegExp && /svg/.test(rule.test.source))),
//         {
//           test: /\.scss$/,
//           use: ['style-loader', 'css-loader', 'sass-loader'],
//           include: paths.src,
//         },
//       ],
//     },
//     resolve: {
//       ...config.resolve,
//       modules: [
//         ...(config.resolve?.modules || []),
//         paths.src,
//       ],
//       extensions: [
//         ...(config.resolve?.extensions || []),
//         '.ts',
//         '.tsx',
//       ],
//     },
//   }
//
//   return SBWConfig
// }
