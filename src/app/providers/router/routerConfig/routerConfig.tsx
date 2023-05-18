import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import React from 'react'

export enum RoutesPath {
    MAIN = '/',
    ABOUT = '/about'
}

interface Routes {
    path: string
    element: React.ReactNode
}

export const routes: Routes[] = [
    { path: RoutesPath.MAIN, element: <MainPage/> },
    { path: RoutesPath.ABOUT, element: <AboutPage/> }
]
