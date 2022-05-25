const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const setup = require('./setup');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
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
