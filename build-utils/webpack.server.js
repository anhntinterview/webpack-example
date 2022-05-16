const commonPaths = require('./common-paths');
const config = require('./webpack.commo');

const serverConfig = {
    ...config,
    target: 'node',
    name: 'server',
    entry: {
        server: path.resolve(commonPaths.appEntry, 'server.js'),
    },
    output: {
        publicPath: '/',
        path: commonPaths.outputPath,
        filename: 'server.js',
    },
    devtool: 'eval-source-map',
    externals: [webpackNodeExternals()],
    node: {
        __dirname: false,
    },
};

module.exports = serverConfig;
