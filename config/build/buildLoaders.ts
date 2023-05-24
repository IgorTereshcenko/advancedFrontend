import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // loaders нужны чтобы научить webpack понимать другие файлы,
    // по умолчанию он распознаёт только JS и JSON

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
        
    }

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }

    // Если не используется TS - нужен babel loader
    const typeScriptLoader = {
        test: /\.tsx?$/, // читает и ts и tsx файлы
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // используется чтобы css стили билдились отдельными чанками от js кода
            {
                loader: 'css-loader',
                options: {
                    modules: { // подключаем CSS modules
                        auto: (resPath: string) => resPath.includes('.module.'), // разделяем cssModules и обычный CSS/SCSS
                        localIdentName: isDev
                            ? '[path].[name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]' // делаем читаемые имена в режиме разработки
                    }
                }
            },
            'sass-loader'
        ]
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    return [fileLoader, babelLoader, svgLoader, typeScriptLoader, cssLoader]
}
