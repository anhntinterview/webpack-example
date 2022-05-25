const webpackNodeExternals = require('webpack-node-externals');
const setup = require('./setup');

const config = {
    mode: 'development',
    target: 'node',
    name: 'server',
    entry: {
        server: `${setup.appEntry}/server.tsx`,
    },
    output: {
        path: setup.outputPath,
        filename: '[name].js',
    },
    devtool: 'inline-source-map',
    externals: [webpackNodeExternals()],
    node: {
        __dirname: false,
    },
};

module.exports = config;
