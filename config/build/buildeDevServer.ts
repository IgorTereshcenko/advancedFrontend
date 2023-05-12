import { BuildOptions } from "./types/config";
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    //Задаем настройки DevServera, он нужен для автоматического обновления в браузере
    return {
        port: options.port, //на каком порте будет работать
        open: true, //это опция, которая позволяет автоматически открывать браузер 
                    //с локальным сервером после его запуска.
        historyApiFallback: true //что бы не терять страницу при обновлени
    }
}