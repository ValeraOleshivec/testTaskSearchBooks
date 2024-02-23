import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import {isDeepStrictEqual} from "util";



const buildLoaders = (options:BuildOptions):webpack.RuleSetRule[] => {

    const typeScriptLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules|\.d\.ts$/,
        use: 'ts-loader',
    }
    const cssLoader ={
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader':MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader:'css-loader',
                options:{
                    modules: {
                        auto: (resPath:string)=>Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    },

                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        typeScriptLoader,cssLoader
    ]
};

export default buildLoaders;