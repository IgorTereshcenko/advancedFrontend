import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {

    const plugins = [
        new HTMLWebpackPlugin({ // упрощает создание файлов HTML и может автоматически вставлять модули JavaScript в наш основной шаблон HTML
            template: paths.html // передаем путь
        }),
        new webpack.ProgressPlugin(), // сообщает о прогрессе компиляции сборки
        new MiniCssExtractPlugin({ // используется чтобы css стили билдились отдельными чанками от js кода
            filename: 'css/[name].[contenthash:8].css', // задаем шаблон имени
            chunkFilename: 'css/[name].[contenthash:8].css' // задаем шаблон чанков
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev) // позволяет использовать переменные из конфига глобально во всем приложении
        })
    ]

    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        })) // удобный анализ бандла)
    }

    return plugins

}
