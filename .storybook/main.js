const custom = require('../webpack.common.js');

module.exports = {
    stories: ['./stories/*.stories.js'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-actions',
        '@storybook/addon-links'
    ],
    webpackFinal: (config) => {
        return { ...config, module: { ...config.module, rules: custom.module.rules } };
    },
};

    
