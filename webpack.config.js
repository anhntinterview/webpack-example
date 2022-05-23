const commonConfig = require('./build-utils/webpack-server.common');
const argv = require('webpack-nano/argv');

const { merge } = require('webpack-merge');

const addons = (/* string | string[] */ addonsArg) => {
    let addons = Array.isArray(addonsArg)
        ? addonsArg.filter((item) => item !== true)
        : [addonsArg].filter(Boolean);

    return addons.map((addonName) => {
        require(`./build-utils/addons/webpack-server.${addonName}.js`);
    });
};

module.exports = () => {
    const { env, addons: addonsArg } = argv;

    if (!env) {
        throw new Error(
            `You must pass an '--env [dev|prod]' flag into your build for webpack to work!`
        );
    }

    const envConfig = require(`./build-utils/webpack-server.${env}.js`);
    const mergedConfig = merge(commonConfig, envConfig, ...addons(addonsArg));

    return [mergedConfig];
};
