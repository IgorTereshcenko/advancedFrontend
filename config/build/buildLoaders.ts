import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'

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

    const cssLoader = buildCssLoaders(isDev)

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
