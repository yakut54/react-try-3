import webpack from "webpack";
import {BuildPaths} from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ]
}