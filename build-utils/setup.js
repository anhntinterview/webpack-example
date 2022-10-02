const path = require('path');
// const fs = require('fs');
// const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');
const PROJECT_ROOT = path.resolve(__dirname, '../');

// const appDirectory = fs.realpathSync(process.cwd());
// const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
// const publicUrlOrPath = getPublicUrlOrPath(
//     process.env.NODE_ENV === 'development',
//     require(resolveApp('package.json')).homepage,
//     process.env.PUBLIC_URL
// );

module.exports = {
    projectRoot: PROJECT_ROOT,
    outputPath: path.join(PROJECT_ROOT, 'build'),
    appEntry: path.join(PROJECT_ROOT, 'server'),
    // appWebpackCache: path.join(PROJECT_ROOT, 'node_modules/.cache'),
    // appTsConfig: path.join(PROJECT_ROOT, 'tsconfig.json'),
    // appJsConfig: path.join(PROJECT_ROOT, 'jsconfig.json'),
    fileType: {
        scriptExtensions: /\.(tsx|ts|js|jsx|mjs)$/,
        styleExtensions: /\.(css|less|styl|scss|sass|sss)$/,
        imageExtensions: /\.(bmp|gif|jpg|jpeg|png)$/,
        fontsExtension: /\.(eot|otf|ttf|woff|woff2)$/,
    },
    // publicUrlOrPath
};
