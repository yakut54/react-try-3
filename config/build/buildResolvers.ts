import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  const { src } = options.paths
  return {
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  }
}
