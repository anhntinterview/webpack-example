const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const setup = require('./setup');

// const createEnvironmentHash = require('./config/createEnvironmentHash');
// const getClientEnvironment = require('./config/env');

// const env = getClientEnvironment(setup.publicUrlOrPath.slice(0, -1));

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    // cache: {
    //     type: 'filesystem',
    //     version: createEnvironmentHash(env.raw),
    //     cacheDirectory: setup.appWebpackCache,
    //     store: 'pack',
    //     buildDependencies: {
    //         defaultWebpack: ['webpack/lib/'],
    //         config: [__filename],
    //         tsconfig: [setup.appTsConfig, setup.appJsConfig].filter((f) =>
    //             fs.existsSync(f)
    //         ),
    //     },
    // },
    module: {
        rules: [
            {
                // Preprocess our own style files
                test: setup.fileType.styleExtensions,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                // Preprocess 3rd party style files located in node_modules
                test: setup.fileType.styleExtensions,
                include: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: setup.fileType.fontsExtension,
                type: 'asset',
            },
            {
                test: /\.svg/,
                type: 'asset/inline',
            },
            {
                test: setup.fileType.imageExtensions,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/style/[name].css',
        }),
    ],
};
