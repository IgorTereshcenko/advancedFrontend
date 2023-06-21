import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import React from 'react'

export enum RoutesPath {
    MAIN = '/',
    ABOUT = '/about',
    PROFILE = '/profile',
    NOTFOUND = '*'
}

interface Routes {
    path: string
    element: React.ReactNode
}

export const routes: Routes[] = [
    { path: RoutesPath.MAIN, element: <MainPage/> },
    { path: RoutesPath.ABOUT, element: <AboutPage/> },
    { path: RoutesPath.PROFILE, element: <ProfilePage/> },
    { path: RoutesPath.NOTFOUND, element: <NotFoundPage/> }
]
