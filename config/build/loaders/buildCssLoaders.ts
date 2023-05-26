import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoaders(isDev:boolean) {

    return {
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
}