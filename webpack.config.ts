import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildOptions, BuildPaths } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";


export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const PORT = env.port || 3000

    const isDev = mode === 'development'

    const paths: BuildPaths = {
        build: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const options: BuildOptions = {
        mode,
        paths,
        isDev,
        port: PORT
    }

    const config: webpack.Configuration = buildWebpackConfig(options)

    return config
}
