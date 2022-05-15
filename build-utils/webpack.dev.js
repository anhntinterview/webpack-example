const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const commonPaths = require('./common-paths');

const port = process.env.PORT || 9000;

const config = {
    mode: 'development',
    entry: {
        app: [
            `${commonPaths.appEntry}/index.ts`,
            'webpack-plugin-serve/client',
        ],
    },
    output: {
        filename: 'sources/[name].[fullhash].js',
    },
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DEV',
            favicon: `public/favicon.ico`,
            templateContent: ({ htmlWebpackPlugin }) =>
                '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
                htmlWebpackPlugin.options.title +
                '</title></head><body><div id="app"></div></body></html>',
            filename: 'index.html',
        }),
        new LodashModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        new webpack.SourceMapDevToolPlugin({
            filename: 'sourcemaps/[name].js.map',
            publicPath: '/',
            fileContext: 'public',
        }),
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
