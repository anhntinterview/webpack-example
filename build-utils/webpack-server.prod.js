const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const commonPaths = require('./common-paths');
const config = require('./webpack-server.common');

const serverConfig = {
    ...config,
    mode: 'production',
    target: 'node',
    name: 'server',
    entry: {
        server: path.resolve(commonPaths.appEntry, 'server.tsx'),
    },
    output: {
        // publicPath: '/',
        path: commonPaths.outputPath,
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        chunkFilename: 'chunks/[name].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
    },
    devtool: 'source-map',
    externals: [webpackNodeExternals()],
    node: {
        __dirname: false,
    },
};

module.exports = serverConfig;
