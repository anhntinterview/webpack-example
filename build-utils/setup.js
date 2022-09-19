const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../');

module.exports = {
    projectRoot: PROJECT_ROOT,
    outputPath: path.join(PROJECT_ROOT, 'build'),
    appEntry: path.join(PROJECT_ROOT, 'server'),
    fileType: {
        scriptExtensions: /\.(tsx|ts|js|jsx|mjs)$/,
        styleExtensions: /\.(css|less|styl|scss|sass|sss)$/,
        imageExtensions: /\.(bmp|gif|jpg|jpeg|png)$/,
        fontsExtension: /\.(eot|otf|ttf|woff|woff2)$/,
    },
};
