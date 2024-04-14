import webpack from "webpack";
import {BuildPaths} from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
    return [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ]
}