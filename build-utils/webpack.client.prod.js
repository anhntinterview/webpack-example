const setup = require('./setup');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const config = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        app: [`${setup.appEntry}/index.tsx`],
    },
    output: {
        filename: 'public/[name].[fullhash].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'public/style/[name].css',
        }),
        new CleanWebpackPlugin(),
        new WebpackManifestPlugin(),
        new LoadablePlugin({
            outputAsset: false,
            writeToDisk: true,
            filename: `${setup.outputPath}/loadable-stats.json`,
        }),
    ],
    optimization: {
        runtimeChunk: 'single', // creates a runtime file to be shared for all generated chunks.
        splitChunks: {
            chunks: 'all', // This indicates which chunks will be selected for optimization.
            automaticNameDelimiter: '-',
            cacheGroups: {
                vendor: {
                    // to convert long vendor generated large name into vendor.js
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
        minimize: true,
        minimizer: [
            new OptimizeCSSAssetsPlugin({}), // minify the css
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false, // It will drop all the console.log statements from the final production build
                    },
                    compress: {
                        drop_console: true, // It will stop showing any console.log statement in dev tools. Make it false if you want to see consoles in production mode.
                    },
                },
                extractComments: false,
                exclude: [], // If you want to exclude any files so that it doesn't get minified.
            }),
        ],
    },
};

module.exports = config;
