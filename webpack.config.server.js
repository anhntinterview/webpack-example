const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const templateContent = (htmlWebpackPlugin) =>
    '<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
    htmlWebpackPlugin.options.title +
    '</title></head><body><div id="root"></div></body></html>';

module.exports = {
    name: 'server',
    entry: {
        server: path.resolve(__dirname, 'server/server.ts'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: [nodeExternals()],
    target: 'node',
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.server.json',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'SERVER',
            favicon: `public/favicon.ico`,
            templateContent: ({ htmlWebpackPlugin }) =>
                templateContent(htmlWebpackPlugin),
            filename: 'index.html',
        }),
    ],
};
