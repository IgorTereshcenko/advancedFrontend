import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({ //упрощает создание файлов HTML и может автоматически вставлять модули JavaScript в наш основной шаблон HTML
            template:paths.html // передаем путь
        }),
        new webpack.ProgressPlugin(), // сообщает о прогрессе компиляции сборки
        new MiniCssExtractPlugin({ // используется чтобы css стили билдились отдельными чанками от js кода
            filename: 'css/[name].[contenthash:8].css', // задаем шаблон имени
            chunkFilename: 'css/[name].[contenthash:8].css' // задаем шаблон чанков
        })
  
    ]
}