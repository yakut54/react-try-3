import webpack from 'webpack'

export const buildBabelLoader = (isDev: boolean): webpack.RuleSetRule => ({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
      },
    },
  ],
})
