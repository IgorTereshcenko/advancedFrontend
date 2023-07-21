import { AboutPage } from 'pages/AboutPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import React from 'react'

export enum RoutesPath {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile/', // +id
    ARTICLES = '/articles',
    ARTICLE_DETAILS = '/articles/', // +id
    NOTFOUND = '*'
}

export interface myRoutes {
    path: string
    element: React.ReactNode
    authOnly?: boolean
}

export const routes: myRoutes[] = [
    { path: RoutesPath.MAIN, element: <MainPage/> },
    { path: RoutesPath.ABOUT, element: <AboutPage/> },
    { path: RoutesPath.PROFILE + ':id', authOnly: true, element: <ProfilePage/> },
    { path: RoutesPath.ARTICLES, authOnly: true, element: <ArticlesPage/> },
    { path: RoutesPath.ARTICLE_DETAILS + ':id', authOnly: true, element: <ArticleDetailsPage/> },
    { path: RoutesPath.NOTFOUND, element: <NotFoundPage/> }
]
