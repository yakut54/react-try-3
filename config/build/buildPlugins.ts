import webpack from "webpack";
import {BuildOptions} from "./types/config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const {paths, isDev} = options
    const plugins = [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        })
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}