const clientCommonConfig = require('./build-utils/webpack.client.common');
const serverCommonConfig = require('./build-utils/webpack.server.common');
const argv = require('webpack-nano/argv');

const { merge } = require('webpack-merge');

const clientAddons = (/* string | string[] */ addonsArg) => {
    let addons = Array.isArray(addonsArg)
        ? addonsArg.filter((item) => item !== true)
        : [addonsArg].filter(Boolean);

    return addons.map((addonName) => {
        require(`./build-utils/addons/webpack.client.${addonName}.js`);
    });
};

const serverAddons = (/* string | string[] */ addonsArg) => {
    let addons = Array.isArray(addonsArg)
        ? addonsArg.filter((item) => item !== true)
        : [addonsArg].filter(Boolean);

    return addons.map((addonName) => {
        require(`./build-utils/addons/webpack.server.${addonName}.js`);
    });
};

module.exports = () => {
    const { env, addons: addonsArg } = argv;

    if (!env) {
        throw new Error(
            `You must pass an '--env [dev|prod]' flag into your build for webpack to work!`
        );
    }

    const clientEnvConfig = require(`./build-utils/webpack.client.${env}.js`);
    const clientMergedConfig = merge(
        clientCommonConfig,
        clientEnvConfig,
        ...clientAddons(addonsArg)
    );

    const serverEnvConfig = require(`./build-utils/webpack.server.${env}.js`);
    const serverMergedConfig = merge(
        serverCommonConfig,
        serverEnvConfig,
        ...serverAddons(addonsArg)
    );

    return [clientMergedConfig, serverMergedConfig];
};
