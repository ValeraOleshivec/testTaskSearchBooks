
import webpack from "webpack";
import {buildResolvers} from "./build/buildResolvers";
import {buildDevServer} from "./build/buildDevServer";
import {BuildOptions} from "./build/types/config";
import buildLoaders from "./build/buildLoaders";
import buildPlugins from "./build/buildPlugins";


export function buildWebpackConfig(
    options: BuildOptions,
): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
