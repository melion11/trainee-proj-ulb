// module.exports = {
//   stories: [
//     '../../src/**/*.stories.@(js|jsx|ts|tsx)',
//   ],
//
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//   ],
//
//   framework: {
//     name: "@storybook/react-webpack5",
//     options: {}
//   },
//
//   docs: {
//     autodocs: true
//   }
// };


import {BuildPaths} from '../build/types/config';
import path from 'path';
import webpack, {RuleSetRule} from 'webpack';
import {buildCssLoader} from '../build/loaders/buildCssLoader';

// const config = {
//     stories: [
//         '../../src/**/*.stories.@(js|jsx|ts|tsx)',
//     ],
//     addons: [
//         '@storybook/addon-links',
//         '@storybook/addon-essentials',
//         '@storybook/addon-interactions',
//     ],
//     framework: {
//         name: '@storybook/react-webpack5',
//         options: {}
//     },
//     docs: {
//         autodocs: true
//     },
//     webpackFinal: async conf => {
//         const newConfig = {...conf}
//
//         const paths: BuildPaths = {
//             build: '',
//             html: '',
//             entry: '',
//             src: path.resolve(__dirname, '..', '..', 'src'),
//         };
//         newConfig.resolve.modules.push(paths.src);
//         newConfig.resolve.extensions.push('.ts', '.tsx');
//
//         // eslint-disable-next-line no-param-reassign
//         newConfig.module.rules = newConfig.module.rules.map((rule: RuleSetRule) => {
//             if (/svg/.test(rule.test as string)) {
//                 return {...rule, exclude: /\.svg$/i};
//             }
//
//             return rule;
//         });
//
//         newConfig.module.rules.push({
//             test: /\.svg$/,
//             use: ['@svgr/webpack'],
//         });
//         newConfig.module.rules.push(buildCssLoader(true));
//
//         return newConfig;
//     }
//
//
// };
//
// export default config


const config = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: true
    },
    /*webpackFinal: async (config, { configType }) => {
        config.module.rules.map((rule) => {
            if (rule.oneOf) {
                rule.oneOf = rule.oneOf.slice().map((subRule) => {
                    if (subRule.test instanceof RegExp && subRule.test.test('.scss')) {
                        return {
                            ...subRule,
                            use: [
                                ...subRule.use,
                                {
                                    loader: require.resolve('sass-resources-loader'),
                                    options: {
                                        resources: [
                                            path.resolve(__dirname, '../../src/styles/varialbles/global.scss')
                                        ]
                                    }
                                }
                            ],
                        }
                    }
                    return subRule;
                });
            }
            return rule;
        });
        return config;
    },*/

};

export default config