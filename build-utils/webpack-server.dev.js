const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const commonPaths = require('./common-paths');
const config = require('./webpack-server.common');

const port = process.env.PORT || 3007;

const serverDevConfig = {
    ...config,
    mode: 'development',
    target: 'node',
    name: 'server',
    entry: {
        server: `${commonPaths.appEntry}/server.tsx`,
    },
    output: {
        path: commonPaths.outputPath,
        filename: '[name].js',
    },
    devtool: 'inline-source-map',
    externals: [webpackNodeExternals()],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: port,
    },
    node: {
        __dirname: false,
    },
};

module.exports = serverDevConfig;
