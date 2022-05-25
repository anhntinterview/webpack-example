const webpackNodeExternals = require('webpack-node-externals');
const setup = require('./setup');

const config = {
    mode: 'production',
    target: 'node',
    name: 'server',
    entry: {
        server: `${setup.appEntry}/server.tsx`,
    },
    output: {
        // publicPath: '/',
        path: setup.outputPath,
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

module.exports = config;
