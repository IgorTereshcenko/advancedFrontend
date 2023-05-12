import webpack, { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolves(options: BuildOptions):ResolveOptions {
  //настраиваим импорты
    return {
        extensions: ['.tsx', '.ts', '.js'], // позволяет не указывать эти расширения при импорте файлов
        preferAbsolute: true, // позволяет использовать абсолютные пути
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'], // точка входа
        alias:{}
      }
}