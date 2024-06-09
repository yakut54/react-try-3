import type { Configuration } from 'webpack'
import path from 'path'

export const modifyWebpackConfig = async (config: Configuration): Promise<Configuration> => {
  const newConfig: Configuration = {
    ...config,
    resolve: {
      ...config.resolve,
      modules: [
        ...(config.resolve?.modules || []),
        path.resolve(__dirname, '../../src'),
      ],
    },
  }

  newConfig.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../../src'),
  })

  // if (config.module?.rules) {
  //   newConfig.module.rules = config.module.rules // array
  //     .map((rule: webpack.RuleSetRule | '...') => {
  //       if (rule !== '...' && /svg/.test(rule.test as string)) {
  //         return { ...rule, exclude: /\.svg$/i }
  //       }
  //
  //       return rule
  //     })
  // }

  return newConfig
}
