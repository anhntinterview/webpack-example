const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const commonPaths = require('./common-paths');

const port = process.env.PORT || 9000;

const templateContent = (htmlWebpackPlugin) =>
    '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
    htmlWebpackPlugin.options.title +
    '</title></head><body><div id="app"></div></body></html>';

const config = {
    mode: 'development',
    entry: {
        app: [
            `${commonPaths.appEntry}/index.tsx`,
            'webpack-plugin-serve/client',
        ],
    },
    output: {
        filename: 'sources/[name].js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'DEV',
            favicon: `public/favicon.ico`,
            templateContent: ({ htmlWebpackPlugin }) =>
                templateContent(htmlWebpackPlugin),
            filename: 'index.html',
        }),
        new LodashModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: port,
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};

module.exports = config;
