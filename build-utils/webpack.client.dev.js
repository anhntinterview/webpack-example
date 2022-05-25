const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const setup = require('./setup');

const config = {
    mode: 'development',
    entry: {
        app: [`${setup.appEntry}/index.tsx`, 'webpack-plugin-serve/client'],
    },
    output: {
        filename: 'public/[name].js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new LodashModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
        }),
    ],
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
