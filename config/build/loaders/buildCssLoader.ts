import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            localIdentName: isDev
              ? '[local]----[hash:base64:3]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  }
}
