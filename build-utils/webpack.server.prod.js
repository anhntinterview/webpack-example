process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

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
    module: {
        rules: [
            {
                test: setup.fileType.scriptExtensions,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader'),
                options: {
                    customize: require.resolve(
                        'babel-preset-react-app/webpack-overrides'
                    ),
                    presets: [[require.resolve('babel-preset-react-app')]],
                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                    // See #6846 for context on why cacheCompression is disabled
                    cacheCompression: false,
                    compact: true,
                },
            },
        ],
    },
};

module.exports = config;
