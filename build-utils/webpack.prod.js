const commonPaths = require('./common-paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'production',
    entry: {
        app: [`${commonPaths.appEntry}/index.ts`],
    },
    output: {
        filename: 'static/[name].[fullhash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'PROD',
            favicon: `public/favicon.ico`,
            templateContent: ({ htmlWebpackPlugin }) =>
                '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
                htmlWebpackPlugin.options.title +
                '</title></head><body><div id="app"></div></body></html>',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style/[name].css',
        }),
    ],
};

module.exports = config;
