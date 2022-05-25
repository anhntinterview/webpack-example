const setup = require('./setup');

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: setup.fileType.scriptExtensions,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
};
