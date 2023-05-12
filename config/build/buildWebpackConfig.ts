import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildeDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths,mode,isDev} = options;

    return {
        mode, // конфигурация приложения при сборке - либо прод либо дев
        entry: paths.entry, // путь до точки входа
        output: { // до точки выхода
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true // удаление ненужных файлов при сборке
        },
        plugins:buildPlugins(options), // подключаем плагины
        module: {
            rules: buildLoaders(options), // подключаем лоадеры
        },
        resolve: buildResolves(options), // подключаем резолв
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined //devserver
    }
}