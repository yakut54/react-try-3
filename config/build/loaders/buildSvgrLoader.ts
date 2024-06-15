import webpack from 'webpack'

export function buildSvgrLoader(): webpack.RuleSetRule {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }
}
