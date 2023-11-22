
module.exports = {
  stories: [
    '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6',
    'storybook-react-i18next'
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: ['../../public'],
  docs: {
    autodocs: true
  }
};
