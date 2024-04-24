import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import {makeLogger} from "ts-loader/dist/logger";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const checkIfModuleResource = (resourcePath: string): boolean => {
        return resourcePath.includes(".module.");
    }
    const fileHashName = (): string => options.isDev
        ? '[local]-[hash:base64:3]'
        : '[hash:base64:8]_build_[hash:base64:2]'

    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: checkIfModuleResource,
                        localIdentName: fileHashName()
                    }
                }
            },
            "sass-loader",
        ],
    }

    const svgrLoader: webpack.RuleSetRule = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff2|woff|eot|ttf|json|ico)$/i,
        use: [{loader: 'file-loader'}]
    }

    const babelLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader'}
    }

    return [
        fileLoader,
        svgrLoader,
        sassLoader,
        babelLoader,
        tsLoader,
    ]
}