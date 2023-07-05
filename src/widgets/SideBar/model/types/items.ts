import { RoutesPath } from 'app/providers/router/routerConfig/routerConfig'
import MainPageIcon from 'shared/assets/icons/mainPage.svg'
import AboutPageIcon from 'shared/assets/icons/aboutPage.svg'
import ProfilePageIcon from 'shared/assets/icons/profilePage.svg'
import ArticlesPageIcon from 'shared/assets/icons/ArticlesPageIcon.svg'

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutesPath.MAIN,
        text: 'Главная',
        Icon: MainPageIcon
    },
    {
        path: RoutesPath.ABOUT,
        text: 'О сайте',
        Icon: AboutPageIcon
    },
    {
        path: RoutesPath.PROFILE,
        text: 'Профиль',
        Icon: ProfilePageIcon,
        authOnly: true
    },
    {
        path: RoutesPath.ARTICLES,
        text: 'Статьи',
        Icon: ArticlesPageIcon,
        authOnly: true
    }
]
