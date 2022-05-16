const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const commonPaths = require('./common-paths');
const config = require('./webpack.common');

const serverConfig = {
    ...config,
    mode: 'development',
    target: 'node',
    name: 'server',
    entry: {
        server: path.resolve(commonPaths.appEntry, 'server.tsx'),
    },
    output: {
        publicPath: '/',
        path: commonPaths.outputPath,
        filename: '[name].js',
    },
    devtool: 'eval-source-map',
    externals: [webpackNodeExternals()],
    node: {
        __dirname: false,
    },
};

module.exports = serverConfig;
