import webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { BuildOptions } from './types/config'

export function buildPlugins({
  paths, isDev, apiUrl, project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev

  const plugins = [

    new webpack.ProgressPlugin(),

    new HtmlWebpackPlugin({
      template: paths.html,
    }),

    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),

    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales },
      ],
    }),
  ]

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerPort: 1226,
    }))
  }

  if (isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }))
  }

  return plugins
}
