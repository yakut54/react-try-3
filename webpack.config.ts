import path from 'path';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths} from "./config/build/types/config";

const mode = 'development';
const isDev = mode === 'development'

const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}
const config = () => buildWebpackConfig({
    mode,
    paths,
    isDev
})

export default config;