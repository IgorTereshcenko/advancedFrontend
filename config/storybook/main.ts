import type { StorybookConfig } from '@storybook/react-webpack5'
import { DefinePlugin, type RuleSetRule } from 'webpack'
import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    webpackFinal: async (config: webpack.Configuration) => {

        const paths: BuildPaths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src')
        }

        config.resolve?.modules?.push(paths.src)
        config.resolve?.extensions?.push('.ts', '.tsx')

        if (config.module?.rules) {
            config.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
                // eslint-disable-next-line @typescript-eslint/prefer-includes
                if (rule !== '...' && /svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i }
                }

                return rule
            })

            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack']
            })
        }

        config.module?.rules?.push(buildCssLoaders(true))

        config.plugins.push(new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('')
        }))

        return config
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    }
}

export default config
